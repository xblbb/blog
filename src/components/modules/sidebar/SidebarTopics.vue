<template>
  <section class="flex flex-col gap-3" aria-labelledby="topics-heading">
    <p id="topics-heading" class="text-xs font-semibold tracking-widest text-gray-600">主题</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="t in items"
        :key="t.slug"
        class="rounded px-3 py-1.5 text-xs"
        :class="t.active ? 'bg-brand-accent/10 text-brand-accent' : 'bg-gray-800 text-gray-400'"
      >
        {{ t.slug }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
// --- 功能 ---
import type { TopicItem } from '../../../data/home'

defineProps<{
  items: TopicItem[]
}>()
</script>
