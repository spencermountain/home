<script setup>
import Main from '../lib/Main.vue'
import Year from '../lib/Year.vue'
import Hr from '../lib/Hr.vue'
</script>

<template>
  <Main class="mt-8">
    <Year id="2022">
      <div class="row-spread ml-8 justify-start">
        <div>
          <Img
            src="/2022/v14.jpg"
            width="350px"
          />
          <div>
            released v14
            <div class="text-[0.9rem]">of compromise</div>
          </div>
          <div class="text-[0.9rem] italic">
            it was <a href="https://github.com/spencermountain/compromise/compare/14.0.0...master">hard</a>
          </div>
          <div class="w-full md:w-1/2" />
        </div>
      <div class="col">
        <div class="row mr-8 max-w-[80%] pr-[6em]">
          <Img src="/2022/mayor.jpg" width="150px" href="https://vimeo.com/29689919" />
        </div>
        <div class="row">
          <div>
            <Img src="/2022/concert.jpg" caption="first concert back" />
            <Img src="/2022/kaaate.jpg" width="110px" />
          </div>
        </div>
      </div>
      </div>
      <div class="row-left mt-12 justify-start">
        <Img src="/2022/trie.jpg" width="200px" />
        <div>
          <a href="https://youtu.be/6DBDBcoMopQ?t=619">future of text</a> presentation
          <div class="my-1 ml-8 text-[0.9rem]">on suffix compression</div>
        </div>
      <div class="row-right flex-1">
        <Img src="/2022/hurricane.jpg" width="200px" class="self-end!" />
      </div>
      </div>
      <div class="col-left">
      <Img src="/2022/transit-lines.jpg" width="800px" class="self-start!" />
      <div class="ml-8">
        guest post on <a href="https://toronto.cityhallwatcher.com/p/chw196">Graphic Matt's newsletter</a>
        <div class="my-1 ml-8 text-[0.9rem]">about the housing crisis in Toronto</div>
      </div>
      </div>
      <div class="row justify-start">
        <Img src="/2022/sky.jpg" width="300px" />
        <div class="flex flex-col items-center justify-around self-stretch p-4">
          <Img src="/2022/model.jpg" width="250px" />
          <Img src="/2022/horizon.jpg" width="300px" />
        </div>
      </div>
      <div class="row-middle justify-end text-right">
        <div class="col-right text-right flex-1 mr-12">
          <div><a href="https://github.com/spencermountain/fr-compromise">french</a></div>
          <div><a href="https://github.com/spencermountain/es-compromise">spanish</a></div>
          <div><a href="https://github.com/spencermountain/de-compromise">german</a></div>
          <div class="flex-1">
            <a href="https://github.com/spencermountain/it-compromise">italian</a>
            <div class="my-1 ml-8">in production →</div>
          </div>
        </div>
        <Img src="/2022/italian.jpg" width="340px" />
      </div>
      <div class="row justify-end text-right">
        <div class="flex flex-col items-center justify-around self-stretch">
          <div class="row justify-end text-right">
            <Img src="/2022/truck.jpg" width="300px" />
        <Img src="/2022/swirl.jpg" width="200px" />
          </div>
        </div>
      </div>
      <div class="row items-start justify-end text-right">
      </div>
    </Year>
  </Main>
</template>
