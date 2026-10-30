<script setup>
import Main from '../lib/Main.vue'
import Year from '../lib/Year.vue'

import Video from '../lib/Video.vue'
</script>

<template>
  <Main class="mt-8">
    <Year id="2021">
      <div class="row">
        <div class="w-full md:w-1/2">
          <Img src="/2021/lockdown.jpg" width="300px" caption="zillion months of lockdown" />
        </div>
      </div>
      <div class="row max-w-200 w-120">
        <Video vimeo="496095722" class="mt-8" />
      </div>
      <div class="mt-1">
        compromise presentation for <a href="https://nlposs.github.io/2020/index.html">EMNLP2020</a>
      </div>
      <div class="mt-20 row">
        <Img
          src="/2021/fluent.jpg"
          width="400px"
          caption="in-browser translation for <a href='https://dailyhive.com/vancouver/fluent-language-chrome-extension'>fluent.co</a>"
        />
        <Img
          src="/2021/newton-crop.jpg"
          width="400px"
          caption="made the cmd+K menu for <a href='https://newtonhq.com/'>Newton email</a>"
        />
      </div>
    </Year>
  </Main>
</template>
