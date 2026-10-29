<script setup>
import Main from '../lib/Main.vue'
import Year from '../lib/Year.vue'

provide('imageLoading', 'eager')
</script>
<template>
  <Main class="mt-12">
    <Year id="2025">
      <div class="row-middle mt-8"></div>
      <div class="row mt-8">
        <div class="col self-start!">
          <Img src="/2025/old-cars.jpg" width="320px" />
          <WallpaperFerns class="w-18 max-h-18 mt-2" />
        </div>
        <div class="col-right self-start!">
          <Img src="/2025/studies-close.jpg" width="380px" />
          <Video
            src="/2025/brush-tool.small.mp4"
            caption="<i>city traffic-analysis tool starting to work…</i>"
            width="260px"
            :autoplay="true"
            :loop="true"
          />
        </div>
      </div>
      <div class="row-left items-start! mt-16">
        <div class="col !items-start">
          <Img src="/2025/description.jpg" width="320px" />
        </div>
        <Img src="/2025/studies.jpg" width="460px" />
      </div>

      <div class="row-left mt-20">
        <div class="col">
          <Img src="/2025/go-train.jpg" width="320px" />
          <Img src="/2025/twosuit.jpg" width="220px" caption="" />
        </div>
        <div class="col">
          <Img src="/2025/award.jpg" width="320px" caption="open-data award, for release<br/>of 20-years of traffic-studies" />
        </div>
      </div>
      <div class="row-left mt-6 items-start!">
        <Img src="/2025/tarriffs.jpg" width="160px" />
        <Img src="/2025/clouds.jpg" width="320px" />
        <!-- <Img src="/2025/tilt-camera.jpg" width="400px" /> -->
      </div>
      <div class="row-left mt-4">
        <Video src="/2025/polygon-tool.small.mp4" width="320px" :autoplay="true" :loop="true" />
        <Img src="/2025/matt-elliot.jpg" width="420px" />
      </div>
      <div class="row-right mt-0 items-start!">
         <Img src="/2025/collision-hotspot.jpg"  class="ml-8" width="380px" />
        <Video src="/2025/radius-tool.small.mp4" width="200px" :autoplay="true" :loop="true" />

        <!-- <Img src="/2025/selection.jpg" /> -->
        <!-- <Img src="/2025/report-1.jpg" /> -->
      </div>
    </Year>
  </Main>
</template>
