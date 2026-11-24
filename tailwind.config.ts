import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F5",
        blush: "#FCE7F3",
        brand: { DEFAULT: "#EC4899", dark: "#BE185D" },
        ink: { DEFAULT: "#241B2F", soft: "#6B6477" },
        line: "#EFE7EA",
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
      borderRadius: { "4xl": "2rem" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
      animation: { float: "float 2s ease-in-out infinite" },
    },
  },
  plugins: [],
} satisfies Config;