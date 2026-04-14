<template>
  <footer
    class="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0"
  >
    <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
      <span class="font-mono text-sm font-bold text-brand-accent">{{ sitePathLabel }}</span>
      <span class="text-xs text-gray-600">© {{ year }} {{ authorName }}</span>
    </div>
    <nav
      class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-600 sm:gap-x-6"
      aria-label="页脚链接"
    >
      <a
        v-for="item in links"
        :key="item.label"
        :href="item.href"
        class="transition hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
      >
        {{ item.label }}
      </a>
    </nav>
  </footer>
</template>

<script setup lang="ts">
// --- 功能 ---
import { sitePathLabel } from '@/data/home'

defineProps<{
  year: number
  authorName: string
  links: { label: string; href: string }[]
}>()
</script>
