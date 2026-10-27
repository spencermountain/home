<script setup>
// right-aligned video with an optional link and html caption. width is any css width
const props = defineProps({
  src: String,
  base: { type: String, default: 'https://snip.spencermountain.dev/2026/10/portfolio' },
  caption: { type: String, default: '' },
  href: String,
  link: String,
  width: { type: String, default: '100%' },
  shadow: { type: String, default: 'md' },
  autoplay: { type: Boolean, default: false }
})
let src = props.src
if (props.base && props.src) {
  src = props.base + props.src
}
</script>

<template>
  <div class="flex flex-col items-end text-right">
    <component :is="props.href ? 'a' : 'div'" :href="props.href" :target="props.href && '_blank'">
      <video
        :src="src"
        :alt="caption"
        :style="{ width }"
        :autoplay="props.autoplay"
        class="m-5 mb-0 rounded-sm"
        :class="shadow === 'none' ? '' : 'shadow-card'"
      />
    </component>
    <div v-if="caption" class="text-[0.9rem]" v-html="caption" />
  </div>
</template>
