/** Hero 区域 + 统计数据 */

import type { StatItem } from './types'

export const hero = {
  status: '欢迎合作与交流',
  name: '顾少鹏',
  tagline: '前端开发 · 海康威视四年一线 · 工程化与可视化',
  bio: '在海康威视做了四年前端，熟悉中大型 B 端与可视化场景下的交付与性能取舍。这个博客用来沉淀组件、构建链路和踩坑记录——把能复用的经验写清楚，比只留在脑子里更可靠。',
}

export const stats: StatItem[] = [
  { value: '42', label: '文章' },
  { value: '18', label: '笔记' },
  { value: '4', label: '海康威视(年)', highlight: true },
]