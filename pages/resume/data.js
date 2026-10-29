// resume content. shaped like JSON Resume (https://jsonresume.org/schema) where possible,
// so it can be exported to resume.json + schema.org JSON-LD without much mapping (see lib/schema.js)

export const basics = {
  name: 'Spencer Kelly',
  label: 'Software developer, NLP',
  email: 'spencermountain@gmail.com',
  url: 'https://spencermounta.in/',
  location: { city: 'Toronto', region: 'Ontario', countryCode: 'CA' },
  // summary is plain text for machines; `intro` is the on-page version with a link
  summary: 'Reluctant author of compromise, popular open-source NLP library',
  intro: { pre: 'Reluctant author of ', link: 'nlp-compromise', url: 'https://github.com/spencermountain/compromise/', post: ', popular open-source NLP library' },
  profiles: [
    { network: 'Portfolio', username: 'spencermounta.in', url: 'https://spencermounta.in/' },
    { network: 'GitHub', username: 'spencermountain', url: 'https://github.com/spencermountain/' },
    { network: 'LinkedIn', username: 'spencermountain', url: 'https://www.linkedin.com/in/spencermountain/' }
  ]
}

// dates are ISO-8601 ('YYYY-MM'). omit endDate for a current job.
// `position` (job title) is optional, but ATS parsers look for it
export const work = [
  {
    name: 'City of Toronto',
    url: 'https://www.toronto.ca/services-payments/streets-parking-transportation/road-safety/big-data-innovation-team/',
    startDate: '2024-03',
    endDate: '2026-09',
    description: 'Transportation',
    summary: 'Traffic volumes and collision pattern analysis'
  },
  {
    name: 'Fluent',
    url: 'https://www.fluent.co/',
    startDate: '2020-05',
    endDate: '2023-10',
    description: 'Language-learning',
    summary: 'Inline translation of webpages'
  },
  {
    name: 'MBI Health',
    url: 'https://mbihealthcaretechnologies.com/',
    startDate: '2019-07',
    endDate: '2020-05',
    description: 'NHS',
    summary: 'Medical transcript/diagnosis analysis'
  },
  {
    name: 'Small Wins',
    url: 'https://begin.com/',
    startDate: '2015-12',
    endDate: '2018-04',
    description: 'Startup',
    summary: 'Dialogue interface'
  },
  {
    name: 'Govinvest',
    url: 'https://govinvest.com/',
    startDate: '2015-05',
    endDate: '2017-12',
    description: 'Pension funds',
    summary: 'Interpretation of pension liability models'
  },
  {
    name: 'State.com',
    url: 'https://en.wikipedia.org/wiki/State_(website)',
    startDate: '2010-11',
    endDate: '2014-12',
    description: 'Social network',
    summary: 'Freebase + Wordnet integration'
  }
]

// the two-column list under the jobs. displayed in this order (left, right, left, right...)
// `section` + `json` say where each item goes in the JSON Resume export
export const highlights = [
  {
    pre: 'Github maintainer with ', link: '>15k', url: 'https://github.com/spencermountain/', post: ' stars',
    section: 'projects', json: { name: 'Open-source maintainer, >15k GitHub stars' }
  },
  {
    link: '"Fishing for Magikarp"', url: 'https://github.com/spencermountain/wtf_wikipedia/pull/573', post: ' role', date: '2024',
    section: 'projects', json: { name: '"Fishing for Magikarp" role, wtf_wikipedia' }
  },
  {
    pre: 'Profiled ', link: 'by Microsoft', url: 'https://devblogs.microsoft.com/cse/2017/06/06/geocoding-social-conversations-nlp-javascript/', post: ' for the UNHRC', date: '2017',
    section: 'publications', json: { name: 'Geocoding social conversations with NLP and JavaScript', publisher: 'Microsoft' }
  },
  {
    link: 'Webby Nomination', url: 'https://winners.webbyawards.com/2015/websites-and-mobile-sites/general-websites-and-mobile-sites/community/159240/state', date: '2015',
    section: 'awards', json: { title: 'Webby Award nomination (State.com)', awarder: 'The Webby Awards' }
  },
  {
    link: 'Software patent', url: 'https://patents.google.com/patent/US20150089409A1/en', post: ' for word-sense classification technique', date: '2013',
    section: 'publications', json: { name: 'Software patent US20150089409A1 - word-sense classification technique', publisher: 'USPTO' }
  },
  {
    link: 'EMNLP', url: 'https://vimeo.com/496095722', post: ' speaker', date: '2020',
    section: 'awards', json: { title: 'EMNLP speaker', awarder: 'EMNLP' }
  },
  {
    pre: 'Grad-School CS - (Queen’s 1 year)', date: '2013',
    section: 'education', json: { institution: 'Queen’s University', area: 'Computer Science', studyType: 'Graduate studies (1 year)' }
  },
  {
    pre: 'UnlockLondon hackathon', em: true, post: ' winner', date: '2012',
    section: 'awards', json: { title: 'UnlockLondon hackathon winner', awarder: 'UnlockLondon' }
  }
]

// for pdf/html metadata
export const keywords = ['NLP', 'natural language processing', 'JavaScript', 'open source', 'data visualization', 'compromise']
