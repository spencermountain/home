<script setup>
import Main from '../lib/Main.vue'
import Year from '../lib/Year.vue'
provide('imageLoading', 'eager')
</script>
<template>
  <Main class="mt-1">
    <Year id="2026">
      <div class="row-middle mt-1 items-start!">
        <div class="col-right w-80 mt-40">
          <Img src="/2026/vol-class.jpg" />
          <Img src="/2026/histogram.jpg" />
          <!-- <Img src="/2026/collision.jpg" /> -->
        </div>
        <div class="col-right">
          <Img
            src="/2026/selection.webp"
            width="500px"
            above="Traffic-analysis application rolled-out within the city"
          />
          <Img
            src="/2026/red-dots.jpg"
            class="mt-8"
            width="300px"
            caption="<i>The first in-house web application<br/>ever deployed at the City of Toronto</i>"
          />
        </div>
      </div>
      <div class="col-left mt-2">
        <div class="mt-0 text-xs row items-end!">
          <Img src="/2026/collision-selection.jpg" caption="am very proud of it" />
          <Img src="/2026/Crash.svg" width="60px" class="shadow-none!" />

          <div class="col-left mt-2">
            <!-- <Img src="/2026/barchart.jpg" width="340px" /> -->
          </div>
        </div>
        <div class="mt-8 row"></div>
        <!-- <div class="mt-8 row items-start!">
          <Img src="/2026/summary.jpg" />
        </div> -->
        <div class="mt-18 row items-start!">
          <Img src="/2026/toronto-1.jpg" width="380px" />
          <Img src="/2026/toronto-3.jpg" class="mt-4" width="240px" />
          <!-- <Img src="/2026/exhibition.jpg" class="mt-12" width="320px" /> -->
        </div>

        <div class="mt-8 row items-middle!">
          <Img src="/2026/world-2.jpg" width="180px" />
          <Img src="/2026/nice.jpg" width="220px" above="turned 40" caption="who cares though" />
          <!-- <Img src="/2026/forty.jpg" width="220px" caption="" /> -->
          <!-- <Img src="/2026/rem.jpg" caption="the REM opened" /> -->
        </div>

        <div class="mt-22 row">
          <Img src="/2026/construction.jpg" width="280px" />
          <Img src="/2026/render.jpg" width="220px" />
        </div>
        <div class="mt-2 row-right items-start! w-full">
          <!-- <Img src="/2026/world-1.jpg" width="320px" /> -->
          <Img src="/2026/debate.jpg" width="350px" />
          <Img src="/2026/bylaws.jpg" width="220px" />
        </div>
        <div class="mt-12 row-left w-full items-end!">
          <Img src="/2026/layoff.jpg" width="220px" caption="got laid-off" class="mb-12" />
          <Img src="/2026/vibecode-crop.jpg" width="460px" class="ml-8" caption="really took this as a sign" />
        </div>
        <div class="mt-18 row">
          <Img src="/2026/nlp.webp" width="300px" />
          <Img src="/2026/git-1.webp" />
          <!-- <Img src="/2026/pr.jpg" /> -->
        </div>
        <div class="mt-8 row-middle">
          <Img src="/2026/testing.webp" width="320px" class="ml-12" />
          <Img src="/2026/git-2.webp" />
          <Img src="/2026/compromise.jpg" />
        </div>

        <div class="row-left w-full mt-8">
          <Img src="/2026/cn-tower.jpg" width="300px" class="mt-0! pt-0!" caption="still love it here" />
          <Img src="/2026/toronto-4.jpg" width="180px" />
          <div class="mt-12 col">
            <Img src="/2026/signs.jpg" width="200px" />
            <Img src="/2026/scarb.webp" width="360px" />
          </div>
        </div>
      </div>
    </Year>
  </Main>
</template>
