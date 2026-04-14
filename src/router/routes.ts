import type { RouteRecordRaw } from 'vue-router'

/** 路由表：路径、命名、组件与 meta 等集中在此维护 */
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
]
