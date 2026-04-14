import { defineStore } from 'pinia'
import { ref } from 'vue'

export type RecentFilter = 'all' | 'posts' | 'notes'

export const useHomeFilterStore = defineStore('homeFilter', () => {
  const recentFilter = ref<RecentFilter>('all')

  function setRecentFilter(next: RecentFilter) {
    recentFilter.value = next
  }

  return { recentFilter, setRecentFilter }
})
