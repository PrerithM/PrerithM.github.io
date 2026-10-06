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
        canvas: "#F7F7F7",
        gold: {
          DEFAULT: "#FFB22C",
          50: "#FFFDF5",
          100: "#FFF9E6",
          200: "#FFEEBF",
          300: "#FFE399",
          400: "#FFCA66",
          500: "#FFB22C",
          600: "#E69C17",
          700: "#B8780B",
          800: "#8A5606",
          900: "#5C3802",
        },
        terracotta: {
          DEFAULT: "#854836",
          50: "#FAF5F4",
          100: "#F5ECE9",
          200: "#E8D3CD",
          300: "#DAB9B0",
          400: "#BE8677",
          500: "#854836",
          600: "#753E2E",
          700: "#5E3124",
          800: "#47251B",
          900: "#301811",
        },
        black: "#000000",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        "gold-glow": "0 0 35px -5px rgba(255, 178, 44, 0.45)",
        "gold-glow-lg": "0 0 60px -10px rgba(255, 178, 44, 0.6)",
        "card-subtle": "0 10px 30px -10px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",
        "card-elevated": "0 25px 50px -12px rgba(133, 72, 54, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.08)",
        "deck-stack": "0 -10px 40px -10px rgba(0, 0, 0, 0.12), 0 20px 40px -10px rgba(133, 72, 54, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
