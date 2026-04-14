<template>
  <section class="flex flex-col gap-3" aria-labelledby="notes-heading">
    <p id="notes-heading" class="text-xs font-semibold tracking-widest text-gray-600">近期笔记</p>
    <a
      v-for="n in items"
      :key="n.title"
      href="#"
      class="flex items-center justify-between gap-3 rounded-md bg-gray-900 p-3 transition hover:bg-gray-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
    >
      <div class="min-w-0 flex flex-col gap-0.5">
        <p class="text-xs font-medium text-white">{{ n.title }}</p>
        <p class="text-xs text-gray-600">{{ n.timeAgo }}</p>
      </div>
      <ChevronRight class="h-3.5 w-3.5 shrink-0 text-gray-500" aria-hidden="true" />
    </a>
  </section>
</template>

<script setup lang="ts">
// --- 组件 ---
import { ChevronRight } from 'lucide-vue-next'
// --- 功能 ---
import type { SidebarNoteItem } from '../../../data/home'

defineProps<{
  items: SidebarNoteItem[]
}>()
</script>
