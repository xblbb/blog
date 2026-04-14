<template>
  <div>
    <div class="mb-4 flex w-full min-w-0 flex-wrap items-end justify-between gap-3 pb-4 pt-2">
      <p class="text-xs font-semibold tracking-widest text-gray-600">近期文章</p>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
        <button
          v-for="key in filterKeys"
          :key="key"
          type="button"
          class="rounded-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          :class="
            recentFilter === key ? 'font-semibold text-brand-accent' : 'text-gray-600 hover:text-gray-400'
          "
          @click="homeFilter.setRecentFilter(key)"
        >
          {{ filterLabels[key] }}
        </button>
      </div>
    </div>
    <div class="flex w-full flex-col">
      <RecentPostRow
        v-for="(row, idx) in filtered"
        :key="row.title"
        :row="row"
        :show-top-border="idx > 0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// --- 组件 ---
import RecentPostRow from './RecentPostRow.vue'

// --- pinia ---
import { storeToRefs } from 'pinia'
import { useHomeFilterStore, type RecentFilter } from '@/stores/homeFilter'

// --- 功能 ---
import { computed } from 'vue'
import type { RecentPost } from '@/data/home'

const props = defineProps<{
  posts: RecentPost[]
}>()

const homeFilter = useHomeFilterStore()
const { recentFilter } = storeToRefs(homeFilter)

const filterKeys: RecentFilter[] = ['all', 'posts', 'notes']

const filterLabels: Record<RecentFilter, string> = {
  all: '全部',
  posts: '文章',
  notes: '笔记',
}

const filtered = computed(() => {
  if (recentFilter.value === 'all') return props.posts
  if (recentFilter.value === 'posts') return props.posts.filter((r) => r.kind === 'post')
  return props.posts.filter((r) => r.kind === 'note')
})
</script>
