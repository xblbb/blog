/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 设计令牌：页面背景 / 强调色（与设计稿终端风一致，见计划「设计令牌」）
      colors: {
        page: {
          bg: '#050a14',
        },
        brand: {
          accent: '#00f0ff',
        },
      },
      // 字体：正文 Inter，标题/路径 JetBrains Mono（通过 index.html 引入 Google Fonts）
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
