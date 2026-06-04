/** 侧边栏：关于 */

import type { ProfileBlock } from './types'

export const profile: ProfileBlock = {
  name: '人物名称',
  role: '职位 · 公司名称（工作年限）',
  bio: '个人简介：专注某某领域，做过某某项目。乐于把某某技术里踩过的坑整理成文，方便自己也方便后来者。',
  /** 本地矢量头像，可替换为 public/ 下同名位图 */
  avatarUrl: new URL('@/assets/images/Profile_photo.jpg', import.meta.url).href,
}