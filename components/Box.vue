<script setup lang="ts">
defineProps({
  title: String,
  right: String,
  color: String,
});
</script>

<template>
  <div class="w-full flex-1">
    <div class="flex flex-col h-full">
      <div
        v-if="title || right"
        class="flex flex-row px-2 font-bold justify-between items-center text-white"
        :class="`bg-${color}`"
      >
        <div v-if="title">
          {{ title }}
        </div>
        <div v-if="right">
          {{ right }}
        </div>
      </div>
      <div
        class="border-1 border-t-0 px-2 flex-grow flex flex-col justify-center"
        :class="`border-${color}`"
      >
        <slot>No content</slot>
      </div>
    </div>
  </div>
</template>
