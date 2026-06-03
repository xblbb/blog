/** 首页 mock：占位符静态数据，类型供 TS 与筛选使用 */

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

export const sitePathLabel = '~/站点名称'

export const hero = {
  status: '状态标语',
  name: '人物名称',
  tagline: '职位 · 公司名称 · 工作年限 · 技术方向',
  bio: '个人简介：在某某公司做了若干年某某岗位，熟悉某某领域。这个博客用来沉淀某某内容——把能复用的经验写清楚，比只留在脑子里更可靠。',
}

export const stats: StatItem[] = [
  { value: '数量', label: '内容类型1' },
  { value: '数量', label: '内容类型2' },
  { value: '数量', label: '公司名称(年)', highlight: true },
]

export const featuredPost: FeaturedPost = {
  tag: '文章标签',
  dateLabel: '发布日期',
  readMinutes: 12,
  title: '文章标题',
  summary:
    '文章摘要：对文章内容的简要概述。',
  viewsLabel: '阅读量',
}

export const recentPosts: RecentPost[] = [
  {
    kind: 'post',
    month: '月份',
    day: '日期',
    tag: '文章标签',
    readMinutes: 8,
    title: '文章标题',
    summary: '文章摘要',
  },
  {
    kind: 'post',
    month: '月份',
    day: '日期',
    tag: '文章标签',
    readMinutes: 6,
    title: '文章标题',
    summary: '文章摘要',
  },
  {
    kind: 'post',
    month: '月份',
    day: '日期',
    tag: '文章标签',
    readMinutes: 15,
    title: '文章标题',
    summary: '文章摘要',
  },
  {
    kind: 'note',
    month: '月份',
    day: '日期',
    tag: '笔记标签',
    readMinutes: 3,
    title: '笔记标题',
    summary: '笔记摘要',
  },
]

export const profile: ProfileBlock = {
  name: '人物名称',
  role: '职位 · 公司名称（工作年限）',
  bio: '个人简介：专注某某领域，做过某某项目。乐于把某某技术里踩过的坑整理成文，方便自己也方便后来者。',
  /** 本地矢量头像，可替换为 public/ 下同名位图 */
  avatarUrl: new URL('@/assets/images/Profile_photo.jpg', import.meta.url).href,
}

export const topics: TopicItem[] = [
  { slug: '技术栈1' },
  { slug: '技术栈2' },
  { slug: '技术方向1', active: true },
  { slug: '技术方向2' },
  { slug: '技术方向3' },
  { slug: '技术方向4' },
  { slug: '文章类型' },
]

export const sidebarNotes: SidebarNoteItem[] = [
  { title: '笔记标题1', timeAgo: '时间间隔1' },
  { title: '笔记标题2', timeAgo: '时间间隔2' },
  { title: '笔记标题3', timeAgo: '时间间隔3' },
]
