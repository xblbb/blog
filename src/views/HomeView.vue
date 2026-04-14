<template>
  <div class="flex min-h-screen w-full flex-col bg-page-bg text-neutral-100">
    <div class="h-px w-full shrink-0 bg-gray-800" />

    <PageContainer class="border-b border-gray-800/80 py-4 sm:border-transparent sm:py-0">
      <div class="sm:py-4 lg:flex lg:h-16 lg:items-center">
        <SiteHeader :nav-items="navItems" />
      </div>
    </PageContainer>

    <PageContainer>
      <HeroSection :hero="hero" :stats="stats" />
    </PageContainer>

    <div class="h-px w-full shrink-0 bg-gray-800" />

    <!-- 12 栅格：主栏 8 + 侧栏 4；小屏单列叠放 -->
    <PageContainer class="py-8 sm:py-10 lg:py-12">
      <div class="grid grid-cols-1 gap-0 lg:grid-cols-12 lg:gap-0">
        <div class="min-w-0 lg:col-span-8 lg:pr-8">
          <FeaturedPostsSection :post="featuredPost" />
          <div class="my-8 h-px w-full bg-gray-800" />
          <RecentPostsSection :posts="recentPosts" />
        </div>

        <aside
          class="mt-10 min-w-0 border-t border-gray-800 pt-10 lg:col-span-4 lg:mt-0 lg:border-l lg:border-gray-800 lg:border-t-0 lg:pl-8 lg:pt-0"
        >
          <div class="flex flex-col gap-8">
            <SidebarAbout :profile="profile" />
            <div class="h-px w-full bg-gray-800" />
            <SidebarTopics :items="topics" />
            <div class="h-px w-full bg-gray-800" />
            <SidebarNotes :items="sidebarNotes" />
            <div class="h-px w-full bg-gray-800" />
            <SidebarSubscribe />
          </div>
        </aside>
      </div>
    </PageContainer>

    <div class="h-px w-full shrink-0 bg-gray-800" />

    <PageContainer class="py-6">
      <SiteFooter :year="footerYear" :author-name="profile.name" :links="footerLinks" />
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
// --- 组件 ---
import PageContainer from '../components/layout/PageContainer.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import FeaturedPostsSection from '../components/modules/FeaturedPostsSection.vue'
import HeroSection from '../components/modules/HeroSection.vue'
import RecentPostsSection from '../components/modules/RecentPostsSection.vue'
import SidebarAbout from '../components/modules/sidebar/SidebarAbout.vue'
import SidebarNotes from '../components/modules/sidebar/SidebarNotes.vue'
import SidebarSubscribe from '../components/modules/sidebar/SidebarSubscribe.vue'
import SidebarTopics from '../components/modules/sidebar/SidebarTopics.vue'
// --- 功能 ---
import {
  featuredPost,
  hero,
  profile,
  recentPosts,
  sidebarNotes,
  stats,
  topics,
} from '../data/home'

const navItems = [
  { label: '文章', href: '#' },
  { label: '笔记', href: '#' },
  { label: '关于', href: '#' },
  { label: '订阅源', href: '#', emphasis: true },
]

const footerYear = new Date().getFullYear()

const footerLinks = [
  { label: 'RSS', href: '#' },
  { label: '源码', href: '#' },
  { label: '站点地图', href: '#' },
]
</script>
