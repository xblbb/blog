<template>
  <div
    class="flex w-full min-w-0 flex-col gap-4 border-gray-800 py-5 sm:flex-row sm:gap-5"
    :class="showTopBorder ? 'border-t' : ''"
  >
    <div class="flex shrink-0 flex-col gap-0.5 sm:w-14">
      <p class="text-xs font-semibold tracking-wider text-gray-600">{{ row.month }}</p>
      <p class="font-mono text-xl font-bold text-white">{{ row.day }}</p>
    </div>
    <div class="flex min-w-0 flex-1 flex-col gap-2">
      <div class="flex flex-wrap items-center gap-2">
        <span class="rounded-sm bg-gray-900 px-2 py-0.5 text-xs font-medium text-gray-400">{{
          row.tag
        }}</span>
        <span class="text-xs text-gray-600">{{ row.readMinutes }} 分钟</span>
      </div>
      <h3 class="break-words text-base font-semibold text-white">{{ row.title }}</h3>
      <p class="text-xs leading-snug text-gray-500">{{ row.summary }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// --- 功能 ---
import type { RecentPost } from '@/data/home'

defineProps<{
  row: RecentPost
  showTopBorder?: boolean
}>()
</script>
