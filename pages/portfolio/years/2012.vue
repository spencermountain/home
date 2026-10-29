<script setup>
import Main from '../lib/Main.vue'
import Year from '../lib/Year.vue'
import Mov from '../lib/Mov.vue'
import Hr from '../lib/Hr.vue'

</script>

<template>
  <Main class="mt-12">
    <Year id="< 2012">
      <div class="row-left">
          <Img src="/2012/london.jpg" width="250px" />
        <div class="w-full md:w-1/2">
          <div>moved to Britain</div>
          <div class="my-1 ml-8 text-[0.9rem] italic">for <a href="https://state.com/">State.com</a> startup</div>
        </div>
        <Img src="/2012/sky.jpg" width="200px" />
      </div>
      <div class="mt-12">
        <div class="mr-12 text-right text-[0.9rem] italic">'london in the rain is beautiful'</div>
        <Img src="/2012/opinion.png" width="300px" />
      </div>
      <div class="mt-12">
        <Img src="/2012/mars.jpg" width="550px" />
      </div>
      <div class="mt-12 w-160">
        <Mov vimeo="13992710" />
      </div>

         <div>English Text simplification</div>
         <Img
           src="/2010/simple.jpg"
           width="450px"
           href="https://docs.google.com/spreadsheets/d/1clPt1ivBcf5Kdi02NzoE_KqEMXNylj6q-88qXuvw1lY/edit?usp=sharing"
           caption="somehow still frequently cited in research"
         />
         <div class="my-5 pl-10"></div>
         <div class="mt-16 ml-8"><b>wikipedia bot</b> accepted on en.wikipedia</div>
         <div class="ml-16 italic">filled-in citation data until 2012.</div>
         <Hr />
    </Year>
  </Main>
</template>
