// tunable layout + output settings for /resume and `pnpm pdf`
export default {
  // -- paper --
  page: 'Letter', // 'Letter' (8.5x11in) or 'A4' (210x297mm)
  margin: '0.6in 0.75in', // css shorthand: top/bottom left/right
  fontSize: '9pt', // base size - everything else is relative (em)
  lang: 'en-CA',

  // -- fonts (self-hosted in /public/fonts) --
  fonts: {
    name: "'Oswald', 'Arial Narrow', sans-serif",
    body: "'Source Code Pro', ui-monospace, Menlo, monospace"
  },

  // -- colors (names from assets/colors.js, or hex) --
  colors: {
    name: '#3d73d9',
    link: '#1a56c4',
    nav: '#a289c4', // portfolio/github/linkedin links
    text: '#444444',
    muted: '#949a9e', // dates
    tag: '#777777' // job description e.g. 'Transportation'
  },

  // -- sections --
  showTimeline: true,
  timelineHeight: 1.55, // inches
  // section headings ('Experience', 'Education'...) help ATS parsers and the pdf bookmark outline.
  // 'visible' prints them small + grey. 'none' hides them (they stay in the html only)
  headings: 'visible',
  dateFormat: '{month-short} {year}', // spacetime format string

  // -- pdf output (relative to repo root) --
  out: ['public/resume', '.output/public/resume'],
  filename: 'spencer-kelly-resume.pdf'
}
