import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        display: ["RobotoSlab", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
