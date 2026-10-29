<script setup>
import Main from '../lib/Main.vue'
import Year from '../lib/Year.vue'

provide('imageLoading', 'eager')
</script>
<template>
  <Main class="mt-12">
    <Year id="2025">
      <div class="row-middle mt-8">
        <Img src="/2025/two-suit.jpg" width="320px" />
      </div>
      <div class="row-middle mt-8">
        <Img src="/2025/old-cars.jpg" width="320px" />
        <Video src="/2025/brush-tool.small.mp4"  :autoplay="true" :loop="true"/>
        <Video src="/2025/radius-tool.small.mp4" :autoplay="true" :loop="true" />
        <Img src="/2025/studies-close.jpg" width="320px" />
      </div>
      <div class="row-middle mt-8">
        <Video src="/2025/polygon-tool.small.mp4"  :autoplay="true" :loop="true"/>
        <Img src="/2025/description.jpg"  />
        <Img src="/2025/selection.jpg"  />
      </div>
      <div class="row-middle mt-8">
        <Img src="/2025/matt-elliot.jpg" width="320px" />
        <Img src="/2025/studies.jpg" width="320px" />
        <div class="col">
          <Img src="/2025/award.jpg" width="320px" caption="won award for open-data"/>
          <Img src="/2025/collision-hotspot.jpg" width="320px" />
        </div>
      </div>
      <div class="row-left mt-8">
        <Img src="/2025/go-train.jpg"  />
        <Img src="/2025/clouds.jpg"  />
        <Img src="/2025/tarrifs.jpg" width="320px" />
        <Img src="/2025/report-1.jpg"  />
        <Img src="/2025/tilt-camera.jpg"  />
      </div>
    </Year>
  </Main>
</template>
