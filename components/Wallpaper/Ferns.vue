<script setup>
const width = 320
const height = 64
const spacing = 32
const seed = 38
let state = seed

// Keep the scattered layout identical during server and client rendering.
const random = () => {
  state = (Math.imul(state, 1664525) + 1013904223) >>> 0
  return state / 4294967296
}

const ferns = Array.from({ length: Math.ceil(width / spacing) + 1 }, (_, index) => {
  const x = index * spacing + (random() - 0.5) * 20
  const rotation = (random() - 0.5) * 60
  const scale = 0.35 + random() * 0.2
  return `translate(${x} ${height}) rotate(${rotation}) scale(${scale}) translate(-55 -132)`
})
</script>
<template>
  <div class="overflow-hidden rounded  w-80 h-16">
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
      <defs>

          <g id="w38m">
            <path
              d="M55,132 C48,92 62,52 54,10"
              fill="none"
              stroke="#7f9c6c"
              stroke-width="2.2"
              stroke-linecap="round"
            />
            <path
              d="M0 0 Q8.5 -12.7 0 -28.3 Q-8.5 -12.7 0 0"
              transform="translate(53.7 122.4) rotate(-61)"
              fill="#7f9c6c"
            />
            <path
              d="M0 0 Q7.9 -11.9 0 -26.4 Q-7.9 -11.9 0 0"
              transform="translate(53.0 111.2) rotate(54)"
              fill="#7f9c6c"
            />
            <path
              d="M0 0 Q7.3 -11.0 0 -24.4 Q-7.3 -11.0 0 0"
              transform="translate(53.1 100.0) rotate(-53)"
              fill="#7f9c6c"
            />
            <path
              d="M0 0 Q6.7 -10.1 0 -22.4 Q-6.7 -10.1 0 0"
              transform="translate(53.6 88.7) rotate(59)"
              fill="#7f9c6c"
            />
            <path
              d="M0 0 Q6.1 -9.2 0 -20.5 Q-6.1 -9.2 0 0"
              transform="translate(54.4 77.4) rotate(-50)"
              fill="#7f9c6c"
            />
            <path
              d="M0 0 Q5.5 -8.3 0 -18.5 Q-5.5 -8.3 0 0"
              transform="translate(55.3 66.1) rotate(59)"
              fill="#7f9c6c"
            />
            <path
              d="M0 0 Q5.0 -7.5 0 -16.6 Q-5.0 -7.5 0 0"
              transform="translate(56.1 54.7) rotate(-52)"
              fill="#7f9c6c"
            />
            <path
              d="M0 0 Q4.4 -6.6 0 -14.6 Q-4.4 -6.6 0 0"
              transform="translate(56.5 43.2) rotate(56)"
              fill="#7f9c6c"
            />
            <path
              d="M0 0 Q3.8 -5.7 0 -12.6 Q-3.8 -5.7 0 0"
              transform="translate(56.4 31.7) rotate(-57)"
              fill="#7f9c6c"
            />
            <path
              d="M0 0 Q3.2 -4.8 0 -10.7 Q-3.2 -4.8 0 0"
              transform="translate(55.5 20.0) rotate(48)"
              fill="#7f9c6c"
            />
            <path d="M0 0 Q4.2 -6.3 0 -14 Q-4.2 -6.3 0 0" transform="translate(100 122) rotate(40)" fill="#7f9c6c" />
            <path d="M0 0 Q3.6 -5.4 0 -12 Q-3.6 -5.4 0 0" transform="translate(8 24) rotate(-60)" fill="#7f9c6c" />
          </g>

        <filter id="w38grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <filter id="w38fiber">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves="3" seed="8" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
       <rect width="480" height="480" fill="#FBFBFB" />
      <use v-for="(transform, index) in ferns" :key="index" href="#w38m" :transform="transform" />
      <!-- <rect width="480" height="480" filter="url(#w38fiber)" opacity="0.045" />
      <rect width="480" height="480" filter="url(#w38grain)" opacity="0.06" /> -->
    </svg>
  </div>
</template>
