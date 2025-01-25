import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        delirium: ["Delirium", "sans-serif"],
      },
      maskImage: {
        "gradient-bottom": "linear-gradient(to bottom, black 60%, transparent)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: "#A587E6",
        secondary: "#F7C36E",
      },
    },
    corePlugins: {
      maskImage: true,
    },
  },
  plugins: [],
} satisfies Config;
