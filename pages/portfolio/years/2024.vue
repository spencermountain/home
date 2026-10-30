<script setup>
import Main from '../lib/Main.vue'
import Year from '../lib/Year.vue'
import Hr from '../lib/Hr.vue'
</script>
<template>
  <Main class="mt-8">
    <Year id="2024">
      <div class="row-middle mt-8">
        <Img src="/2024/breakfast.jpg" width="320px" />
        <Img src="/2024/covid-crop.jpg" width="375px" />
      </div>
      <div class="col mt-8 w-full">
        <div class="row-right just-start!">
          <div class="text-sm">
            got a government job.
            <div class="col">
              <Img
                src="/2024/gov-shirt.jpg"
                width="320px"
                class="just-start!"
                caption="at the City of Toronto Transportation Department"
              />
            </div>
          </div>
          <Img src="/2024/gov-graph.jpg" width="200px" />
          <Img src="/2024/gov-people.jpg" width="200px" />
        </div>
        <div class="row-right">
          <Img src="/2024/arrows.jpg" width="175px" />
          <Img src="/2024/gov-it.jpg" width="160px" />
        </div>
        <!-- <div class="text-sm text-left w-full mt-12">mandate to update Toronto's traffic-analysis software</div> -->
        <div class="row-right mt-20">
          <!-- <Img src="/2024/toronto-ttc.jpg" width="400px" /> -->
          <div class="row-middle">
            <Img src="/2024/toronto-flood.jpg" width="400px" above="to re-write Toronto's traffic-analysis software" />
            <Img src="/2024/toronto-traffic.jpg" width="400px" />
          </div>
        </div>
        <div class="row-left w-full mt-12">
          <div class="col w-100">
            <Img src="/2024/zoom.jpg" width="500px" caption="starting building a web app" />
            <!-- <div class="text-sm">started building web app.</div> -->
          </div>
          <div class="col w-100">
            <Img src="/2024/plan.jpg" width="350px" class="ml-4" />
            <Img src="/2024/plan-2.jpg" width="260px" />
          </div>
        </div>
        <div class="row-middle mt-16 w-full">
          <div class="col w-[500px]">
            <Video src="/2024/table-scroll.mp4" width="450px" autoplay :loop="true" />
            <Video src="/2024/polygon-1.mp4" width="450px" autoplay :loop="true" />
          </div>
          <Img src="/2024/gov-2.jpg" width="300px" />
          <Img src="/2024/move-1.jpg" width="500px" class="mt-8" />
        </div>
      </div>
      <div class="col mt-8"></div>
      <Hr />
    </Year>
  </Main>
</template>
