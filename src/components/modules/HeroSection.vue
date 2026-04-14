<template>
  <section class="w-full" aria-labelledby="hero-name">
    <div class="flex flex-col gap-5 py-12 sm:py-16 lg:pb-16 lg:pt-20">
      <!-- <div class="inline-flex items-center gap-2 rounded bg-gray-800 px-3 py-1">
        <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
        <p class="text-xs font-medium tracking-wider text-brand-accent">{{ hero.status }}</p>
      </div> -->
      <h1 id="hero-name" class="font-mono text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
        {{ hero.name }}
      </h1>
      <p class="text-base text-gray-500">{{ hero.tagline }}</p>
      <p class="max-w-2xl text-base leading-relaxed text-gray-400">{{ hero.bio }}</p>
      <div class="flex flex-wrap items-center gap-x-10 gap-y-4">
        <div v-for="s in stats" :key="s.label" class="flex flex-col gap-1">
          <p
            class="font-mono text-3xl font-bold"
            :class="s.highlight ? 'text-brand-accent' : 'text-white'"
          >
            {{ s.value }}
          </p>
          <p class="text-xs font-medium tracking-widest text-gray-600">{{ s.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// --- 功能 ---
import type { StatItem } from '@/data/home'

defineProps<{
  hero: { status: string; name: string; tagline: string; bio: string }
  stats: StatItem[]
}>()
</script>
