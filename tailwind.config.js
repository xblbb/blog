/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 设计令牌：页面背景色 / 强调色
      colors: {
        page: {
          bg: '#050a14',
        },
        brand: {
          accent: '#00f0ff',
        },
      },
      // 字体配置：正文字体与标题/路径字体
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
