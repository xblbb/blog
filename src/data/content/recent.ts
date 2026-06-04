/** 近期内容 */

import type { RecentPost } from './types'

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