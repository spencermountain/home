<template>
  <!-- content column: left-aligned flex column, 1080px max -->
  <div class="portfolio-content mx-auto flex w-full max-w-[1080px] flex-col items-start justify-around px-5 text-left text-black [overflow-wrap:anywhere]">
    <slot />
  </div>
</template>

<style scoped>
/* Let nested flex items shrink without clipping their contents. */
.portfolio-content :deep(div),
.portfolio-content :deep(a) {
  min-width: 0;
  max-width: 100%;
}

/* Videos still use horizontal margins; images use wrapper padding. */
.portfolio-content :deep(video) {
  max-width: calc(100% - 40px);
  height: auto;
}

</style>
