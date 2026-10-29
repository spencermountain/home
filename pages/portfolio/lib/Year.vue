<script setup>
// one year of the portfolio: a linkable heading plus its content
defineProps({ id: { type: String, required: true } })
</script>

<template>
  <div :id="id" class="w-full min-w-0">
    <h2 class="mt-18 mr-8 mb-1 border-l-[5px] border-blue px-4 text-[2.4em] leading-none font-thin text-[#4d4d4d]">
      {{ id }}
    </h2>
    <slot />
  </div>
</template>
