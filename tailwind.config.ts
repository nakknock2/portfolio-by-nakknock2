import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2ff",
          100: "#e0e7ff",
          600: "#1e3a5f",
          700: "#162d4a",
          800: "#0f1e33",
          900: "#0a1628",
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
