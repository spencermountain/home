<script setup>
// right-aligned image with an optional link and html caption. width is any css width
const props = defineProps({
  src: String,
  base: { type: String, default: 'https://snip.spencermountain.dev/2026/10/portfolio' },
  caption: { type: String, default: '' },
  href: String,
  link: String,
  loading: String,
  width: { type: String, default: '100%' },
  shadow: { type: String, default: 'md' }
})
const defaultLoading = inject('imageLoading', 'eager')
let src = props.src
if (props.base && props.src) {
  src = props.base + props.src
}
</script>

<template>
  <div class="flex min-w-0 max-w-full flex-col items-end text-right">
    <component
      :is="props.href ? 'a' : 'div'"
      :href="props.href"
      :target="props.href && '_blank'"
      class="min-w-0 max-w-full p-3 pb-0 sm:p-5 sm:pb-0 text-decoration-none! border-bottom-none! underline-none!"
      :class="props.href ? 'cursor-pointer' : ''"
    >
      <img
        :src="src"
        :alt="caption"
        :loading="props.loading || defaultLoading"
        decoding="async"
        :style="{ width }"
        class="h-auto max-w-full rounded-sm"
        :class="shadow === 'none' ? '' : 'shadow-card'"
      />
    </component>
    <div v-if="caption" class="w-full min-w-0 px-3 text-[0.9rem] [overflow-wrap:anywhere] sm:px-5" v-html="caption" />
  </div>
</template>
