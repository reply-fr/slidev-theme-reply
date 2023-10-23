<template>
  <div
    v-if="!$nav.currentRoute.meta.slide.frontmatter.hide_footer"
    class="flex items-center gap-4 absolute w-full bottom-0 left-0 py-0.5 px-4 text-sm text-white"
    :class="`bg-${
      $nav.currentRoute.meta.slide.frontmatter.accent ||
      $slidev.themeConfigs.accent ||
      'green'
    }`"
  >
    <div class="flex-grow">
      {{ $nav.currentRoute.meta.slide.frontmatter.footer }}
    </div>
    <div>{{ $nav.currentPage }} / {{ $nav.total }}</div>
    <ReplyLogo class="w-6 h-6" />
  </div>
</template>
