/** 首页 mock：中文静态数据，类型供 TS 与筛选使用 */

export type ContentKind = 'post' | 'note'

export interface FeaturedPost {
  tag: string
  dateLabel: string
  readMinutes: number
  title: string
  summary: string
  viewsLabel: string
}

export interface RecentPost {
  kind: ContentKind
  month: string
  day: string
  tag: string
  readMinutes: number
  title: string
  summary: string
}

export interface StatItem {
  value: string
  label: string
  highlight?: boolean
}

export interface ProfileBlock {
  name: string
  role: string
  bio: string
  /** 头像 URL，建议使用 public/ 下静态资源 */
  avatarUrl: string
}

export interface TopicItem {
  slug: string
  active?: boolean
}

export interface SidebarNoteItem {
  title: string
  timeAgo: string
}

export const sitePathLabel = '~/博客'

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

export const featuredPost: FeaturedPost = {
  tag: '分布式系统',
  dateLabel: '2025年1月15日',
  readMinutes: 12,
  title: 'Raft 共识如何工作：从选主到日志复制',
  summary:
    '从选主、日志复制到故障场景，系统梳理 Raft 共识算法；并对比为何在许多场景下它比 Paxos 更直观、更易落地。',
  viewsLabel: '约 2.4k 次阅读',
}

export const recentPosts: RecentPost[] = [
  {
    kind: 'post',
    month: '1月',
    day: '08',
    tag: 'Rust',
    readMinutes: 8,
    title: '没有垃圾回收，也能保证内存安全吗？',
    summary: '从所有权模型出发，看看 Rust 如何在编译期就拦住一大类内存问题。',
  },
  {
    kind: 'post',
    month: '12月',
    day: '22',
    tag: '随笔',
    readMinutes: 6,
    title: '把事做完，本身就是一种能力',
    summary: '为什么很多项目会死在「快做完了」的 80%？聊聊能真正交付的习惯与系统。',
  },
  {
    kind: 'post',
    month: '12月',
    day: '05',
    tag: '系统',
    readMinutes: 15,
    title: '从零用 Go 写一个键值存储',
    summary: '带 WAL、内存表与 SSTable 合并的持久化、并发 KV 存储，分步实现要点梳理。',
  },
  {
    kind: 'note',
    month: '11月',
    day: '18',
    tag: '笔记',
    readMinutes: 3,
    title: '速记：高性能 IO 里 epoll 与 kqueue 怎么选',
    summary: 'Linux epoll 与 BSD kqueue 的短对比：各自适用场景与线上取舍。',
  },
]

export const profile: ProfileBlock = {
  name: '顾少鹏',
  role: '前端开发工程师 · 海康威视（4 年）',
  bio: '专注 Web 前端与工程化，做过业务中台、可视化与大屏相关交付。乐于把 TypeScript、Vue 与构建链路里踩过的坑整理成文，方便自己也方便后来者。',
  /** 本地矢量头像，可替换为 public/ 下同名位图 */
  avatarUrl: '/avatar.svg',
}

export const topics: TopicItem[] = [
  { slug: 'Vue' },
  { slug: 'TypeScript' },
  { slug: '工程化', active: true },
  { slug: '可视化' },
  { slug: '性能优化' },
  { slug: '组件库' },
  { slug: '随笔' },
]

export const sidebarNotes: SidebarNoteItem[] = [
  { title: 'TCP 握手的几种边界情况', timeAgo: '2 天前' },
  { title: '大规模单体仓的一些随想', timeAgo: '1 周前' },
  { title: 'Zig 的 comptime 被低估了', timeAgo: '2 周前' },
]
