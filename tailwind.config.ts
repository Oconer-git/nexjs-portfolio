import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "var(--background)",
        whitesmoke: "#f7f6f6",
        foreground: "var(--foreground)",
        text: "#1e293b",
        highlight: "#475569",
      },
    },
  },
  plugins: [],
} satisfies Config;
