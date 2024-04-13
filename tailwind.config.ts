import type { Config } from "tailwindcss"
import {nextui} from "@nextui-org/react"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  prefix: "",
  theme: {
    // colors: {
    //   "primary-color": "#121063",
    //   "secondary-color": "#000000",
    //   "accent-color": "#000000",
    //   "neutral-color": "#000000",
    // },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "xl": "1280px",
      },
    },
    extend: {},
  },
  darkMode: ["class"],
  plugins: [
    require("tailwindcss-animate"), 
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom them
    })
  ]
} satisfies Config

export default config