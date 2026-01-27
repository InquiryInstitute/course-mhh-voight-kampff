/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        season: {
          primary: '#06b6d4',    // cyan-500
          glow: 'rgba(6, 182, 212, 0.05)',
        },
        surface: {
          DEFAULT: '#18181b',    // zinc-900
          dark: '#09090b',       // zinc-950
        },
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        body: ['"EB Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
