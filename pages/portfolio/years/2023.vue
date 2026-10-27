<script setup>
import Main from '../lib/Main.vue'
import Year from '../lib/Year.vue'
</script>
<template>
  <Main class="mt-12">
    <Year id="2023">
      <div class="col ml-8">
        <div class="row-middle">
          <div class="">
            <Img src="/2023/2023-04-11.jpg" width="250px" />
          </div>
          <div class="col-right w-80 text-right items-end!">
            <Img src="/2023/dam-break.jpg" width="200px" />
            <Img src="/2023/egging.jpg" width="250px" />
          </div>
        </div>

        <div class="row mt-8">
          <Img
            src="/2023/fluent-2023.jpg"
            width="400px"
            caption="Fluent.co went bankrupt<br/> <i>even though it was really fun and good</i>"
          />
        </div>
        <div class="row mt-8 w-full">
          <div class="col justify-end! w-full max-w-[600px]">
            <Img src="/2023/job-hunt.jpg" width="450px" class="self-end!" />
            <div class="row-right">
              <Img src="/2023/globe.jpg" width="120px" class="self-end" />
              <Img src="/2023/gpt-3-crop.jpg" width="280px" shadow="none" class="self-end!" />
            </div>
          </div>
        </div>

        <div class="row-middle mt-18">
          <Img src="/2023/deeplearning-1.jpg" width="225px" />
          <Img src="/2023/deeplearning-2.jpg" width="350px" caption="<i>deep-learning.jpg</i>" />
        </div>

        <div class="row mt-20">
          <div class="col-right w-40">
            <Img src="/2023/clouds.jpg" />
            <Img src="/2023/plants.jpg" />
          </div>
          <div class="col flex-1">
            <Img src="/2023/sunglasses.jpg" width="400px" />
            <Img src="/2023/hackernews-crop.jpg" caption="vowed to never make hackernews again" />
          </div>
        </div>
      </div>
    </Year>
  </Main>
</template>
