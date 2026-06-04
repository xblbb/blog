/** 侧边栏：关于 */

import type { ProfileBlock } from './types'

export const profile: ProfileBlock = {
  name: '顾少鹏',
  role: '前端开发工程师 · 海康威视（4 年）',
  bio: '专注 Web 前端与工程化，做过业务中台、可视化与大屏相关交付。乐于把 TypeScript、Vue 与构建链路里踩过的坑整理成文，方便自己也方便后来者。',
  /** 本地矢量头像，可替换为 public/ 下同名位图 */
  avatarUrl: new URL('@/assets/images/Profile_photo.jpg', import.meta.url).href,
}