/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 参考サイトの配色：ほぼ黒、温かみある暗色
        bg: {
          DEFAULT: '#0c0b09',   // ほぼ黒、わずかに温かい
          warm:    '#111008',   // 少し暗緑みあるほぼ黒
          muted:   '#1a1812',   // 少し明るい
        },
        accent: {
          red:   '#8b1a1a',     // 深い暗赤
          green: '#1f2d1a',     // 暗い抹茶緑
          line:  '#2a2820',     // 区切り線
        },
        text: {
          primary:  '#f0ece4',  // 明るいオフホワイト
          muted:    '#b8b0a4',  // 読みやすいグレー
          faint:    '#7a7268',  // 薄め補助テキスト
        },
      },
      fontFamily: {
        mincho: ['"Cormorant Garamond"', '"Shippori Mincho"', 'serif'],
        gothic: ['"Shippori Mincho"', '"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
