/** 首页内容类型定义 */

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