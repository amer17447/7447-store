import type { Config } from "tailwindcss"
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
}
export default config
