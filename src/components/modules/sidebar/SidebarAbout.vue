<template>
  <section class="flex flex-col gap-4" aria-labelledby="about-heading">
    <p id="about-heading" class="text-xs font-semibold tracking-widest text-gray-600">关于</p>
    <div class="flex items-center gap-4">
      <img
        class="h-14 w-14 shrink-0 rounded-full object-cover"
        :src="profile.avatarUrl"
        width="56"
        height="56"
        :alt="`${profile.name}的头像`"
      />
      <div class="min-w-0 flex flex-col gap-1">
        <p class="font-mono text-base font-semibold text-white">{{ profile.name }}</p>
        <p class="text-xs text-gray-500">{{ profile.role }}</p>
      </div>
    </div>
    <p class="text-xs leading-snug text-gray-400">{{ profile.bio }}</p>
    <div class="flex flex-wrap gap-x-4 gap-y-2 text-xs">
      <a
        href="#"
        class="text-gray-500 transition hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
      >
        代码仓库
      </a>
      <a
        href="#"
        class="text-gray-500 transition hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
      >
        动态
      </a>
      <a
        href="#"
        class="text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
      >
        邮箱
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
// --- 功能 ---
import type { ProfileBlock } from '@/data/home'

defineProps<{
  profile: ProfileBlock
}>()
</script>
