import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        brando: ['Montserrat', 'sans-serif'],
        raleway: ['Montserrat', 'sans-serif'],
        "FiraCode": ["Montserrat", "monospace"],
        monserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
