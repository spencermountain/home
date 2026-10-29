<script setup>
import Y2012 from './years/2012.vue'
import Y2013 from './years/2013.vue'
import Y2014 from './years/2014.vue'
import Y2015 from './years/2015.vue'
import Y2016 from './years/2016.vue'
import Y2017 from './years/2017.vue'
import Y2018 from './years/2018.vue'
import Y2019 from './years/2019.vue'
import Y2020 from './years/2020.vue'
import Y2021 from './years/2021.vue'
import Y2022 from './years/2022.vue'
import Y2023 from './years/2023.vue'
import Y2024 from './years/2024.vue'
import Y2025 from './years/2025.vue'
import Y2026 from './years/2026.vue'
import Citations from './Citations.vue'
import Graph from './graph/index.vue'

useHead({ title: '•' })
// Defer images in older years until they approach the viewport.
provide('imageLoading', 'lazy')
</script>

<template>
  <!-- the portfolio keeps its own look: serif, 1.2rem text with a fixed 24px line-height -->
  <div class="portfolio min-h-screen bg-white pt-5 font-serif text-[1.2rem] leading-6 text-[#4d4d4d]">
    <!-- tiny header: back to the home page -->
    <div class="col-left justify-start text-[0.8rem] italic group">
      <NuxtLink to="/" class="border-b border-transparent ml-2 row text-grey-500! hover:text-grey-600"
        ><span class="text-xl mr-2">〱&nbsp;</span>
        <span class="text-grey-500!">spencer kelly</span>
      </NuxtLink>
      <div class="text-grey-400! ml-10 text-xs">computer programmer in Toronto</div>
    </div>
    <div class="mx-4">
      <Y2026 />
      <Y2025 />
      <Y2024 />
      <Y2023 />
      <Y2022 />
      <Y2021 />
      <Y2020 />
      <Y2019 />
      <Y2018 />
      <Y2017 />
      <Y2016 />
      <Y2015 />
      <Y2014 />
      <Y2013 />
      <Y2012 />
      <Citations />
      <div class="h-16" />
      <Graph />
    </div>
  </div>
</template>
