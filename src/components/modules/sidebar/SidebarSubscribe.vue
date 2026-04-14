<template>
  <section class="flex flex-col gap-3 rounded-lg bg-gray-800 p-5" aria-labelledby="subscribe-heading">
    <p id="subscribe-heading" class="text-xs font-semibold tracking-widest text-gray-600">订阅</p>
    <p class="max-w-md text-xs leading-snug text-gray-400">
      新文章会发到你的邮箱，不刷屏，随时可退订。
    </p>
    <label class="sr-only" for="subscribe-email">邮箱</label>
    <input
      id="subscribe-email"
      type="email"
      autocomplete="email"
      placeholder="你的@邮箱.com"
      class="h-9 w-full max-w-md rounded-md border border-gray-800 bg-gray-900 px-3 text-xs text-gray-200 placeholder:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
    />
    <button
      type="button"
      class="flex h-9 w-full max-w-md items-center justify-center rounded-md bg-brand-accent text-xs font-semibold text-gray-900 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
      @click.prevent
    >
      订阅 →
    </button>
  </section>
</template>

<script setup lang="ts"></script>
