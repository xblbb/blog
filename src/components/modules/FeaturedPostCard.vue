<template>
  <article class="flex w-full flex-col gap-3 rounded-lg bg-gray-800 p-6">
    <div class="flex flex-wrap items-center gap-2 gap-y-2">
      <span
        class="rounded-sm bg-brand-accent/10 px-2 py-0.5 text-xs font-semibold tracking-wider text-brand-accent"
      >
        {{ post.tag }}
      </span>
      <span class="text-xs text-gray-600">{{ post.dateLabel }}</span>
      <span class="text-xs text-gray-600">· 约 {{ post.readMinutes }} 分钟阅读</span>
    </div>
    <h2 class="text-xl font-bold leading-snug text-white">{{ post.title }}</h2>
    <p class="text-sm leading-normal text-gray-400">{{ post.summary }}</p>
    <div class="flex w-full flex-wrap items-center justify-between gap-2 pt-1">
      <a
        href="#"
        class="text-xs font-medium text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
      >
        阅读正文 →
      </a>
      <span class="text-xs text-gray-600">{{ post.viewsLabel }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
// --- 功能 ---
import type { FeaturedPost } from '@/data/home'

defineProps<{
  post: FeaturedPost
}>()
</script>
