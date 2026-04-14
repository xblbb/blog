<template>
  <header
    class="flex w-full flex-col gap-4 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-0"
  >
    <RouterLink
      :to="{ name: 'home' }"
      class="font-mono text-lg font-bold text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
    >
      {{ sitePathLabel }}
    </RouterLink>
    <nav
      class="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400 sm:gap-x-8"
      aria-label="主导航"
    >
      <a
        v-for="item in navItems"
        :key="item.label"
        :href="item.href"
        class="transition hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        :class="item.emphasis ? 'text-brand-accent' : ''"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
// --- 组件 ---
import { RouterLink } from 'vue-router'
// --- 功能 ---
import { sitePathLabel } from '../../data/home'

defineProps<{
  navItems: { label: string; href: string; emphasis?: boolean }[]
}>()
</script>
