<script setup>
import Main from '../lib/Main.vue'
import Year from '../lib/Year.vue'
</script>

<template>
  <Main class="mt-2">
    <Year id="2014">
      <div class="row-left">
            <Img src="/2014/digraph-genealogy.jpg" width="250px" caption="went to grad school for a short time." />
          <Img src="/2014/gradschool.jpg" width="150px" />
      </div>
      <div class="mt-16 mb-5 pl-10 italic col">
        <div class="text-sm">granted this weird software patent</div>
        <div>
        <a href="https://patents.google.com/patent/US20150089409A1/en">
          <Img src="/2014/state-patent.jpg" width="450px" />
        </a>
        </div>
      </div>
      <div class="row mt-12">
        <div class="w-[230px]">
          <Img src="/2014/earthbarely1.jpg" width="250px" />
        </div>
        <div class="w-full md:ml-4 md:w-1/2">
          <Img src="/2014/earthbarely2.jpg" width="250px" />
          <div class="text-[0.9rem] text-grey italic">CUSEC14 hackathon finalist</div>
          <Img src="/2014/floor-walk.jpg" width="250px" href="https://vimeo.com/103858377" />
        </div>
      </div>
    </Year>
  </Main>
</template>
