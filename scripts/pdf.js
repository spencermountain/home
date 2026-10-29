// `pnpm pdf` - render /resume to a tagged, metadata-rich pdf
//   1. `nuxt generate` (skip with --no-build, or point at a running server with --url=http://localhost:3000/resume)
//   2. serve .output/public, print /resume with headless chromium (playwright)
//   3. add Info + XMP metadata, and embed resume.json + JSON-LD as attachments (pdf-lib)
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises'
import { execSync } from 'node:child_process'
import { join, extname } from 'node:path'
import { chromium } from 'playwright'
import { PDFDocument, PDFName, AFRelationship } from 'pdf-lib'
import config from '../pages/resume/config.js'
import { basics, keywords } from '../pages/resume/data.js'
import { toJsonResume, toJsonLd } from '../pages/resume/lib/schema.js'

const args = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, '').split('=')))
const root = '.output/public'

// -- 1. build --
if (!args.url && !('no-build' in args)) execSync('pnpm build', { stdio: 'inherit' })

// -- 2. serve + print --
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.json': 'application/json', '.svg': 'image/svg+xml' }
const serve = () =>
  new Promise((done) => {
    const server = createServer(async (req, res) => {
      let file = join(root, decodeURIComponent(req.url.split('?')[0]))
      if ((await stat(file).catch(() => null))?.isDirectory()) file = join(file, 'index.html')
      const body = await readFile(file).catch(() => readFile(join(root, '200.html')).catch(() => null))
      res.writeHead(body ? 200 : 404, { 'content-type': types[extname(file)] || 'application/octet-stream' })
      res.end(body)
    })
    server.listen(0, () => done(server))
  })

const server = args.url ? null : await serve()
const url = args.url || `http://localhost:${server.address().port}/resume/`

const browser = await chromium.launch()
const page = await browser.newPage()
await page.emulateMedia({ media: 'print' })
await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForSelector('.h-resume')
await page.evaluate(() => document.fonts.ready)
const raw = await page.pdf({
  preferCSSPageSize: true, // use @page size + margin from config.js
  printBackground: true,
  tagged: true, // accessible structure tree (headings, lists, links, reading order)
  outline: true // pdf bookmarks from h1-h3
})
await browser.close()
server?.close()

// -- 3. metadata --
const pdf = await PDFDocument.load(raw)
const pages = pdf.getPageCount()
if (pages > 1) console.warn(`\n⚠️  resume is ${pages} pages - tighten config.js (fontSize, margin, timelineHeight)\n`)

const now = new Date()
const title = `${basics.name} - Resume`
const subject = `${basics.name} - ${basics.summary}`
pdf.setTitle(title, { showInWindowTitleBar: true })
pdf.setAuthor(basics.name)
pdf.setSubject(subject)
pdf.setKeywords(keywords)
pdf.setCreator('Vue + Playwright (spencermounta.in/resume)')
pdf.setProducer('Chromium + pdf-lib')
pdf.setLanguage(config.lang)
pdf.setCreationDate(now)
pdf.setModificationDate(now)

// XMP: the same metadata as xml, which is what most modern tools (and PDF/A) read
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const iso = now.toISOString()
const xmp = `<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
 <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description rdf:about=""
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:xmp="http://ns.adobe.com/xap/1.0/"
    xmlns:pdf="http://ns.adobe.com/pdf/1.3/"
    xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/">
   <dc:format>application/pdf</dc:format>
   <dc:title><rdf:Alt><rdf:li xml:lang="x-default">${esc(title)}</rdf:li></rdf:Alt></dc:title>
   <dc:creator><rdf:Seq><rdf:li>${esc(basics.name)}</rdf:li></rdf:Seq></dc:creator>
   <dc:description><rdf:Alt><rdf:li xml:lang="x-default">${esc(subject)}</rdf:li></rdf:Alt></dc:description>
   <dc:subject><rdf:Bag>${keywords.map((k) => `<rdf:li>${esc(k)}</rdf:li>`).join('')}</rdf:Bag></dc:subject>
   <dc:language><rdf:Bag><rdf:li>${config.lang}</rdf:li></rdf:Bag></dc:language>
   <dc:identifier>${esc(new URL('/resume/', basics.url).href)}</dc:identifier>
   <xmp:CreateDate>${iso}</xmp:CreateDate>
   <xmp:ModifyDate>${iso}</xmp:ModifyDate>
   <xmp:MetadataDate>${iso}</xmp:MetadataDate>
   <xmp:CreatorTool>Vue + Playwright</xmp:CreatorTool>
   <pdf:Producer>Chromium + pdf-lib</pdf:Producer>
   <pdf:Keywords>${esc(keywords.join(', '))}</pdf:Keywords>
   <xmpRights:Marked>False</xmpRights:Marked>
  </rdf:Description>
 </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`
const xmpStream = pdf.context.stream(xmp, { Type: 'Metadata', Subtype: 'XML' })
pdf.catalog.set(PDFName.of('Metadata'), pdf.context.register(xmpStream))

// machine-readable copies of the content, as pdf attachments (PDF/A-3 'associated files')
const jsonResume = JSON.stringify(toJsonResume(), null, 2)
const jsonLd = JSON.stringify(toJsonLd(), null, 2)
const attach = (str, name, mimeType, description) =>
  pdf.attach(Buffer.from(str), name, { mimeType, description, creationDate: now, modificationDate: now, afRelationship: AFRelationship.Data })
await attach(jsonResume, 'resume.json', 'application/json', 'JSON Resume v1.0.0 (jsonresume.org)')
await attach(jsonLd, 'resume.jsonld', 'application/ld+json', 'schema.org Person (JSON-LD)')

const bytes = await pdf.save()
for (const dir of config.out) {
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, config.filename), bytes)
  await writeFile(join(dir, 'resume.json'), jsonResume)
}
console.log(`✓ ${config.filename} (${pages} page, ${(bytes.length / 1024).toFixed(0)}kb) -> ${config.out.join(', ')}`)
