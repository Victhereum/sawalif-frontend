import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: "#E5E5E5",
          dark: "#080910",
          DEFAULT: "#6E40FF",
        },
        accent: { purple: "#B2B3FF" },
        neutral: {
          gray: "#191919",
          gray100: "#333333",
        },
      },
      animation: {
        "move-up": "move-up 1s linear infinite",
        "move-down": "move-down 1s linear infinite",
        "move-left": "move-left 1s linear infinite",
      },
      keyframes: {
        "move-up": {
          "0%": {
            transform: "translateY(30%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        "move-down": {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(30%)",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-1200%)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
