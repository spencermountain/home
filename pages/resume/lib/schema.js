// machine-readable exports of data.js:
//  - JSON Resume v1 (https://jsonresume.org/schema) - embedded in the pdf + served as resume.json
//  - schema.org Person as JSON-LD - in the page <head> + embedded in the pdf
import { basics, work, highlights, keywords } from '../data.js'

// which date field each JSON Resume section uses
const dateField = { awards: 'date', publications: 'releaseDate', projects: 'startDate', education: 'endDate' }

export const toJsonResume = () => {
  const { intro, ...b } = basics
  const out = { $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json', basics: b, work }
  for (const h of highlights) {
    const item = { ...h.json, url: h.url }
    if (h.date) item[dateField[h.section]] = h.date
    ;(out[h.section] ||= []).push(item)
  }
  out.meta = { canonical: new URL('/resume/resume.json', basics.url).href, version: 'v1.0.0', lastModified: new Date().toISOString() }
  return out
}

const org = (name, url) => ({ '@type': 'Organization', name, url })

export const toJsonLd = () => {
  const r = toJsonResume()
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: basics.name,
    jobTitle: basics.label,
    description: basics.summary,
    email: `mailto:${basics.email}`,
    url: basics.url,
    address: { '@type': 'PostalAddress', addressLocality: basics.location.city, addressRegion: basics.location.region, addressCountry: basics.location.countryCode },
    sameAs: basics.profiles.map((p) => p.url),
    knowsAbout: keywords,
    // schema.org 'Role' pattern - lets an employer carry start/end dates
    worksFor: work.map((w) => ({
      '@type': 'EmployeeRole',
      roleName: w.position || w.summary,
      description: w.summary,
      startDate: w.startDate,
      endDate: w.endDate,
      worksFor: org(w.name, w.url)
    })),
    alumniOf: (r.education || []).map((e) => ({ '@type': 'CollegeOrUniversity', name: e.institution })),
    award: (r.awards || []).map((a) => `${a.title} (${a.date})`),
    subjectOf: (r.publications || []).map((p) => ({ '@type': 'CreativeWork', name: p.name, url: p.url, datePublished: p.releaseDate, publisher: org(p.publisher) }))
  }
}
