<script setup></script>
<template>
<div class="overflow-hidden rounded shadow w-full">

    <svg xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 480 480">
    <defs>
    <pattern id="w50p" width="120" height="120" patternUnits="userSpaceOnUse"><use href="#w50m" x="-120" y="-120"/><use href="#w50m" x="0" y="-120"/><use href="#w50m" x="120" y="-120"/><use href="#w50m" x="-120" y="0"/><use href="#w50m" x="120" y="0"/><g id="w50m"><polygon points="18,14 30,10 26,24" fill="#D68881"/><polygon points="54,20 66,16 70,28 58,32" fill="#2D85A8"/><polygon points="96,10 106,18 98,26" fill="#9c896c"/><polygon points="12,52 24,48 28,60 16,64" fill="#8C8C88"/><polygon points="48,58 60,52 64,66" fill="#7f9c6c"/><polygon points="90,50 104,54 100,68 88,64" fill="#D68881"/><polygon points="26,86 38,82 42,94 30,98" fill="#2D85A8"/><polygon points="66,90 78,86 74,100" fill="#9c896c"/><polygon points="104,88 114,94 106,102" fill="#7f9c6c"/><polygon points="6,26 14,30 8,38" fill="#303b50"/><polygon points="76,34 84,30 88,40" fill="#303b50"/><circle cx="40" cy="30" r="1.5" fill="#8C8C88"/><circle cx="84" cy="74" r="1.5" fill="#8C8C88"/><circle cx="16" cy="108" r="1.5" fill="#D68881"/><circle cx="112" cy="36" r="1.5" fill="#7f9c6c"/></g><use href="#w50m" x="-120" y="120"/><use href="#w50m" x="0" y="120"/><use href="#w50m" x="120" y="120"/></pattern>
    <filter id="w50grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
    <filter id="w50fiber"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves="3" seed="8" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
    </defs>
    <rect width="480" height="480" fill="#f3efe6"/>
    <rect width="480" height="480" fill="url(#w50p)"/>
    <rect width="480" height="480" filter="url(#w50fiber)" opacity="0.045"/>
    <rect width="480" height="480" filter="url(#w50grain)" opacity="0.06"/>
    </svg>
  </div>
</template>
