<script setup>
const props = defineProps({
  height: {
    type: Number,
    default: 280,
  },
  width: {
    type: Number,
    default: 480,
  },
});
</script>
<template>
<div class="overflow-hidden rounded shadow w-full" >
  <svg xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 480 480">
  <defs>
  <pattern id="w57p" width="64" height="64" patternUnits="userSpaceOnUse"><use href="#w57m" x="-64" y="-64"/><use href="#w57m" x="0" y="-64"/><use href="#w57m" x="64" y="-64"/><use href="#w57m" x="-64" y="0"/><use href="#w57m" x="64" y="0"/><g id="w57m"><g transform="translate(32 32)"><ellipse rx="7.1" ry="10.5" cy="-9.4" transform="rotate(0)" fill="#cc8a66"/><ellipse rx="7.1" ry="10.5" cy="-9.4" transform="rotate(45)" fill="#cc8a66"/><ellipse rx="7.1" ry="10.5" cy="-9.4" transform="rotate(90)" fill="#cc8a66"/><ellipse rx="7.1" ry="10.5" cy="-9.4" transform="rotate(135)" fill="#cc8a66"/><ellipse rx="7.1" ry="10.5" cy="-9.4" transform="rotate(180)" fill="#cc8a66"/><ellipse rx="7.1" ry="10.5" cy="-9.4" transform="rotate(225)" fill="#cc8a66"/><ellipse rx="7.1" ry="10.5" cy="-9.4" transform="rotate(270)" fill="#cc8a66"/><ellipse rx="7.1" ry="10.5" cy="-9.4" transform="rotate(315)" fill="#cc8a66"/><circle r="5.4" fill="#f6efd9"/></g><g transform="translate(0 0)"><ellipse rx="3.8" ry="5.6" cy="-5.0" transform="rotate(0)" fill="#e6d7b3"/><ellipse rx="3.8" ry="5.6" cy="-5.0" transform="rotate(45)" fill="#e6d7b3"/><ellipse rx="3.8" ry="5.6" cy="-5.0" transform="rotate(90)" fill="#e6d7b3"/><ellipse rx="3.8" ry="5.6" cy="-5.0" transform="rotate(135)" fill="#e6d7b3"/><ellipse rx="3.8" ry="5.6" cy="-5.0" transform="rotate(180)" fill="#e6d7b3"/><ellipse rx="3.8" ry="5.6" cy="-5.0" transform="rotate(225)" fill="#e6d7b3"/><ellipse rx="3.8" ry="5.6" cy="-5.0" transform="rotate(270)" fill="#e6d7b3"/><ellipse rx="3.8" ry="5.6" cy="-5.0" transform="rotate(315)" fill="#e6d7b3"/><circle r="2.9" fill="#cc8a66"/></g></g><use href="#w57m" x="-64" y="64"/><use href="#w57m" x="0" y="64"/><use href="#w57m" x="64" y="64"/></pattern>
  <filter id="w57grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
  <filter id="w57fiber"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves="3" seed="8" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
  </defs>
  <rect width="480" height="480" fill="#7f9c6c"/>
  <rect width="480" height="480" fill="url(#w57p)"/>
  <rect width="480" height="480" filter="url(#w57fiber)" opacity="0.045"/>
  <rect width="480" height="480" filter="url(#w57grain)" opacity="0.06"/>
  </svg>
</div>
</template>
