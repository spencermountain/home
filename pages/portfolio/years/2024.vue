<script setup>
import Main from '../lib/Main.vue'
import Year from '../lib/Year.vue'
</script>
<template>
  <Main class="mt-12">
    <Year id="2024">
      <div class="row-middle mt-8">
        <Img src="/2024/breakfast.jpg" width="350px" />
        <Img src="/2024/covid-crop.jpg" width="400px" />
      </div>
      <div class="col mt-18 w-full">
        <div class="text-sm">got a government job.</div>
        <div class="row-right just-start!">
          <Img src="/2024/gov-shirt.jpg" width="320px" class="just-start!" />
          <Img src="/2024/gov-graph.jpg" width="200px" />
          <Img src="/2024/gov-people.jpg" width="210px" />
        </div>
        <div class="row-right">
          <Img src="/2024/arrows.jpg" width="215px" />
          <Img src="/2024/gov-it.jpg" width="200px" />
        </div>
        <div class="text-sm text-left w-full mt-12">mandate to update Toronto's traffic-analysis software</div>
        <div class="row-left w-full">
          <div class="col w-[400px]">
            <Img src="/2024/zoom.jpg" width="500px" />
            <div class="text-sm">started building web app.</div>
          </div>
          <div class="col w-[400px]">
            <Img src="/2024/plan.jpg" width="350px" class="ml-4" />
            <Img src="/2024/plan-2.jpg" width="300px" />
          </div>
        </div>
        <div class="row-middle mt-8 w-full">
          <div class="col w-[500px]">
            <Video src="/2024/table-scroll.mp4" width="450px" autoplay :loop="true" />
            <Video src="/2024/polygon-1.mp4" width="450px" autoplay :loop="true" />
          </div>
          <Img src="/2024/gov-2.jpg" width="300px" />
          <Img src="/2024/move-1.jpg" width="500px" class="mt-8" />
        </div>
      </div>
      <div class="col mt-8"></div>
    </Year>
  </Main>
</template>
