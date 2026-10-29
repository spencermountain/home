<script setup>
import Main from '../lib/Main.vue'
import Year from '../lib/Year.vue'
</script>

<template>
  <Main class="mt-12">
    <Year id="2015">
      <div class="row-left">
      <Img src="/2015/toronto.jpg" width="250px" caption="moved to Toronto" />
      <Img src="/2015/2015.jpg" width="150px" />
      </div>
      <div class="mt-8 text-[0.9rem]">cool pension vizualizations for <a href="https://govinvest.com/">govInvest</a> <i class="text-grey text-xs ml-2">(now truecomp.com)</i></div>
      <div class="row-left">
      <Img src="/2017/govdna.png" width="500px" />
      <div class="my-1 ml-8">
        <Img src="/2015/govinvest2.jpg" width="400px" class="mt-6" />
      </div>
      </div>
      <div class="mt-12">
        <Img src="/2015/playoffs.jpg" width="400px" caption="blue jays win ALDS<br />but lose semi-final" />
      </div>
    </Year>
  </Main>
</template>
