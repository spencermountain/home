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
            caption="Fluent.co went bankrupt<br/> <i>even though it was really good.</i>"
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

        <div class="row mt-18">
          <Img src="/2023/deeplearning-1.jpg" width="250px" caption="is this deep learning?" />
          <Img src="/2023/deeplearning-2.jpg" width="400px" />
        </div>
      </div>
    </Year>
  </Main>
</template>
