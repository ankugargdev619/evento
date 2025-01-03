import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50 : "#eff6ff",
          100 : "#dceafd",
          200 : "#c0dbfd",
          300 : "#95c4fb",
          400 : "#62a4f8",
          500 : "#3e82f3",
          600 : "#2762e8",
          700 : "#204ed5",
          800 : "#2040ad",
          900 : "#203a88",
          950 : "#203a88"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        bannerImg : "url('/event-banner.jpeg')",
        blackOverlay : "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
      },
      fontFamily: {
        barlow:['"Barlow-SemiBold"','sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
