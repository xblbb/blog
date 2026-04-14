<template>
  <div>
    <div class="mb-6 flex w-full min-w-0 flex-wrap items-end justify-between gap-3 pb-5">
      <p class="text-xs font-semibold tracking-widest text-gray-600">精选文章</p>
      <a
        href="#"
        class="text-xs text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
      >
        查看全部 →
      </a>
    </div>
    <FeaturedPostCard :post="post" />
  </div>
</template>

<script setup lang="ts">
// --- 组件 ---
import FeaturedPostCard from './FeaturedPostCard.vue'
// --- 功能 ---
import type { FeaturedPost } from '../../data/home'

defineProps<{
  post: FeaturedPost
}>()
</script>
