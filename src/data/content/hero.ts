/** Hero 区域 + 统计数据 */

import type { StatItem } from './types'

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