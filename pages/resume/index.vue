<script setup>
import spacetime from 'spacetime'
import config from './config.js'
import { basics, work, highlights, keywords } from './data.js'
import { toJsonLd } from './lib/schema.js'
import Timeline from './Timeline.vue'

const { page, margin, fontSize, fonts, colors: c, lang } = config
const fmt = (iso) => spacetime(iso).format(config.dateFormat)
const pdfUrl = `/resume/${config.filename}`

// self-hosted fonts + paper size. @page can't read css vars, so it's injected as a string
const face = (family, file, weight = 400, style = 'normal') =>
  `@font-face{font-family:'${family}';src:url(/fonts/${file}.woff2) format('woff2');font-weight:${weight};font-style:${style};font-display:block}`
const css = [
  face('Oswald', 'oswald-latin-400-normal'),
  face('Source Code Pro', 'source-code-pro-latin-400-normal'),
  face('Source Code Pro', 'source-code-pro-latin-400-italic', 400, 'italic'),
  face('Source Code Pro', 'source-code-pro-latin-700-normal', 700),
  `@page{size:${page};margin:${margin}}`,
  `.sheet{--pad:${margin}}`
].join('\n')

useHead({
  title: `${basics.name} - Resume`,
  htmlAttrs: { lang },
  meta: [
    { name: 'description', content: `${basics.name} - ${basics.summary}` },
    { name: 'author', content: basics.name },
    { name: 'keywords', content: keywords.join(', ') },
    { property: 'og:type', content: 'profile' },
    { property: 'og:title', content: `${basics.name} - Resume` },
    { property: 'og:description', content: basics.summary },
    { property: 'profile:username', content: 'spencermountain' }
  ],
  link: [
    { rel: 'alternate', type: 'application/pdf', href: pdfUrl, title: 'Resume (PDF)' },
    { rel: 'alternate', type: 'application/json', href: '/resume/resume.json', title: 'JSON Resume' }
  ],
  style: [{ innerHTML: css }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(toJsonLd()) }]
})

// css vars, so tailwind classes can use config colors
const vars = {
  fontSize,
  fontFamily: fonts.body,
  color: c.text,
  '--name': c.name,
  '--link': c.link,
  '--nav': c.nav,
  '--muted': c.muted,
  '--tag': c.tag
}
// 'none' still keeps the heading in the html for screen-readers, but chromium drops it from the pdf
const h2 = config.headings === 'visible' ? 'mb-[1em] text-[0.75em] uppercase tracking-[0.08em] text-[var(--muted)]' : 'sr-only'
const link = 'text-[var(--link)] underline decoration-1 underline-offset-2'
</script>

<template>
  <!-- screen: a paper-sized card on grey. print: just the page -->
  <div class="min-h-screen bg-lightest py-8 print:bg-transparent print:p-0">
    <a :href="pdfUrl" class="fixed right-4 top-3 text-sm print:hidden" download>download pdf</a>

    <!-- h-resume / h-card: microformats2, for indieweb parsers -->
    <article class="sheet h-resume mx-auto bg-[#fff] shadow-card print:shadow-none" :class="`page-${page}`" :style="vars">
      <header class="h-card p-contact">
        <div class="row-spread flex-nowrap items-baseline">
          <h1 class="p-name font-normal leading-none text-[var(--name)]" :style="{ fontFamily: fonts.name, fontSize: '2.3em' }">
            {{ basics.name }}
          </h1>
          <nav aria-label="Links" class="font-bold">
            <template v-for="(p, i) in basics.profiles" :key="p.url">
              <span v-if="i" class="mx-[0.5em] text-[var(--nav)]" aria-hidden="true">•</span>
              <a :href="p.url" class="u-url text-[var(--nav)] underline decoration-1 underline-offset-2" :rel="i ? 'me' : 'me author'">{{ p.network === 'GitHub' ? 'Github' : p.network }}</a>
            </template>
          </nav>
          <address class="text-[0.8em] not-italic text-[var(--tag)]">
            <span class="p-locality">{{ basics.location.city }}</span>,
            <span class="p-country-name">Canada</span>
          </address>
        </div>
        <div class="row-spread mt-[1.4em] flex-nowrap items-baseline gap-x-[1em] text-left">
          <p class="p-summary p-note">
            {{ basics.intro.pre }}<a :href="basics.intro.url" :class="link">{{ basics.intro.link }}</a>{{ basics.intro.post }}
          </p>
          <a :href="`mailto:${basics.email}`" class="u-email shrink-0" :class="link">{{ basics.email }}</a>
        </div>
      </header>

      <section aria-labelledby="h-experience" class="mt-[2.2em]">
        <h2 id="h-experience" class="ml-[1.5em]" :class="h2">Experience</h2>
        <ul class="ml-[4.5em] list-disc space-y-[1.9em] marker:text-[var(--muted)]">
          <li v-for="w in work" :key="w.name" class="p-experience h-event pl-[0.8em]">
            <h3 class="inline">
              <a :href="w.url" class="p-name u-url text-[1.15em] font-bold" :class="link">{{ w.name }}</a>
            </h3>
            <span class="text-[0.8em] text-[var(--muted)]">
              -
              <time class="dt-start" :datetime="w.startDate">{{ fmt(w.startDate) }}</time>
              -
              <time v-if="w.endDate" class="dt-end" :datetime="w.endDate">{{ fmt(w.endDate) }}</time>
              <span v-else>Present</span>
              -
              <span class="p-category font-bold text-[var(--tag)]">{{ w.description }}</span>
            </span>
            <div v-if="w.position" class="p-job-title font-bold">{{ w.position }}</div>
            <p class="p-summary mt-[0.5em]">{{ w.summary }}</p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="h-highlights" class="mx-[2em] mt-[2.6em]">
        <h2 id="h-highlights" :class="h2">Recognition &amp; education</h2>
        <ul class="row-spread items-start gap-y-[1.6em] text-left">
          <li v-for="(h, i) in highlights" :key="i" class="w-[48%]" :class="i % 2 ? 'text-right' : ''">
            <span v-if="h.pre" :class="{ italic: h.em }">{{ h.pre }}</span>
            <a v-if="h.link" :href="h.url" :class="link">{{ h.link }}</a>
            <span v-if="h.post">{{ h.post }}</span>
            <template v-if="h.date">
              - <time :datetime="h.date">{{ h.date }}</time>
            </template>
          </li>
        </ul>
      </section>

      <figure v-if="config.showTimeline" class="mt-[2.8em]" :style="{ height: config.timelineHeight + 'in' }">
        <Timeline class="max-h-full" />
      </figure>
    </article>
  </div>
</template>

<style>
.sheet {
  box-sizing: border-box;
  padding: var(--pad);
  line-height: 1.35;
  font-variant-ligatures: none; /* keeps the pdf text-layer clean for parsers */
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}
.sheet.page-Letter {
  width: 8.5in;
  min-height: 11in;
}
.sheet.page-A4 {
  width: 210mm;
  min-height: 297mm;
}
/* the @page margin replaces the card padding when printing */
@media print {
  .sheet.sheet {
    width: auto;
    min-height: 0;
    padding: 0;
  }
}
</style>
