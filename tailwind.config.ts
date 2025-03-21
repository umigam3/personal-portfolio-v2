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
      colors: {
        primary: "#A587E6",
        secondary: "#F7C36E",
      },
    },
  },
  plugins: [],
} satisfies Config;
