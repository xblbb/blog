/** 精选内容 */

import type { FeaturedPost } from './types'

export const featuredPost: FeaturedPost = {
  tag: '分布式系统',
  dateLabel: '2025年1月15日',
  readMinutes: 12,
  title: 'Raft 共识如何工作：从选主到日志复制',
  summary:
    '从选主、日志复制到故障场景，系统梳理 Raft 共识算法；并对比为何在许多场景下它比 Paxos 更直观、更易落地。',
  viewsLabel: '约 2.4k 次阅读',
}