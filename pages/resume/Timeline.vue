<script setup>
// print-friendly (vector) version of /portfolio/graph, drawn from the same jobs.js + events.js
import spacetime from 'spacetime'
import colors from '../../assets/colors.js'
import jobs from '../portfolio/graph/jobs.js'
import events from '../portfolio/graph/events.js'

// -- tunable layout, in svg units (the chart is 1000 units wide) --
const W = 1000
const pad = 12 // left/right inset
const rowH = 30
const rowGap = 7
const topRoom = 34 // space above the bars, for event labels
const axisH = 26
const font = 12.5 // inline label size
const smallFont = 10.5 // 'above' labels + markers
const tickCount = 6
const grid = 11 // background grid size

const epoch = (str) => spacetime(str).epoch
const min = Math.min(...jobs.map((j) => epoch(j.start)))
const max = Math.max(...jobs.map((j) => epoch(j.end)))
const x = (e) => pad + ((e - min) / (max - min)) * (W - pad * 2)

const rows = Math.max(...jobs.map((j) => j.row || 1))
const base = topRoom + rows * (rowH + rowGap) // y of the x-axis
const H = base + axisH

const bars = jobs.map((j) => {
  const h = rowH * (parseInt(j.height) / 100 || 1)
  const left = x(epoch(j.start))
  const width = x(epoch(j.end)) - left
  const y = base - rowGap / 2 - ((j.row || 1) - 1) * (rowH + rowGap) - h
  // skip inline labels that won't fit
  const fits = j.label.length * font * 0.55 < width - 6
  return { ...j, left, width, y, h, fits, bg: colors[j.color] || j.color || colors.grey }
})

const markers = events.map((e) => ({ ...e, x: x(epoch(e.date)) }))

// x-axis: a tick every january 1st, labels every few years
const startYear = spacetime(min).year() + 1
const ticks = []
for (let y = startYear; spacetime(`${y}-01-01`).epoch < max; y++) ticks.push({ year: y, x: x(epoch(`${y}-01-01`)) })
const step = Math.max(1, Math.ceil(ticks.length / tickCount))
</script>

<template>
  <!-- decorative: the same info is in the text above, so hide it from screen-readers / tagged-pdf -->
  <svg :viewBox="`0 0 ${W} ${H}`" class="block h-auto w-full" aria-hidden="true" role="presentation" font-family="Georgia, 'Times New Roman', serif">
    <defs>
      <pattern id="tl-grid" :width="grid" :height="grid" patternUnits="userSpaceOnUse">
        <path :d="`M ${grid} 0 L 0 0 0 ${grid}`" fill="none" stroke="#efefef" stroke-width="1" />
      </pattern>
    </defs>
    <rect :width="W" :height="H" fill="url(#tl-grid)" rx="3" />

    <!-- point-in-time markers -->
    <g v-for="m in markers" :key="m.title" :font-size="smallFont" fill="#606c74">
      <text :x="m.x" :y="14 + (m.nudgeY || 0) / 2" text-anchor="middle">{{ m.title }}</text>
      <line :x1="m.x" :x2="m.x" :y1="20 + (m.nudgeY || 0) / 2" :y2="base - rowH - rowGap" stroke="#949a9e" stroke-width="0.8" />
    </g>

    <g v-for="b in bars" :key="b.label + b.start">
      <rect :x="b.left" :y="b.y" :width="b.width" :height="b.h" :fill="b.bg" rx="4" />
      <text
        v-if="b.labelPosition === 'above'"
        :x="b.left + (b.nudgeX || 0) / 2"
        :y="b.y - 4"
        :font-size="smallFont"
        font-style="italic"
        fill="#606c74"
      >
        {{ b.label }}
      </text>
      <text
        v-else-if="b.fits"
        :x="b.left + b.width / 2"
        :y="b.y + b.h / 2"
        :font-size="font"
        text-anchor="middle"
        dominant-baseline="central"
        fill="#fff"
      >
        {{ b.label }}
      </text>
    </g>

    <!-- x-axis -->
    <line :x1="0" :x2="W" :y1="base" :y2="base" stroke="#cbd5e1" />
    <line v-for="t in ticks" :key="t.year" :x1="t.x" :x2="t.x" :y1="base" :y2="base + 4" stroke="#a3a5a5" />
    <text
      v-for="(t, i) in ticks"
      v-show="i % step === 0"
      :key="'l' + t.year"
      :x="t.x"
      :y="base + 18"
      text-anchor="middle"
      :font-size="smallFont + 1"
      fill="#606c74"
    >
      {{ t.year }}
    </text>
  </svg>
</template>
