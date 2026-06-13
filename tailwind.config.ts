import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f5f0e8",
        ink: "#171615",
        muted: "#69645d",
        line: "#d8d0c5",
        accent: "#31473b",
        "accent-soft": "#dfe7de",
        clay: "#9a7762",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 22, 21, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
