/** 首页数据 barrel re-export — 所有内容已拆分至 content/ 文件夹 */

export { sitePathLabel } from './content/site'
export { hero, stats } from './content/hero'
export { featuredPost } from './content/featured'
export { recentPosts } from './content/recent'
export { profile } from './content/profile'
export { topics } from './content/topics'
export { sidebarNotes } from './content/sidebar-notes'

export type {
  ContentKind,
  FeaturedPost,
  RecentPost,
  StatItem,
  ProfileBlock,
  TopicItem,
  SidebarNoteItem,
} from './content/types'