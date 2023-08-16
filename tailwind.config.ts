import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { 
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-ubuntu)']
      },
      colors: {
        "cotton-candy-50": "#f0fbfd",
        "cotton-candy-100": "#d0f3fa",
        "cotton-candy-200": "#b9eef8",
        "cotton-candy-300": "#98e6f4",
        "cotton-candy-400": "#85e1f2",
        "cotton-candy-500": "#66d9ef",
        "cotton-candy-600": "#5dc5d9",
        "cotton-candy-700": "#489aaa",
        "cotton-candy-800": "#387783",
        "cotton-candy-900": "#2b5b64",
        "lemon-50": "#eeffe7",
        "lemon-100": "#ccffb3",
        "lemon-200": "#b3ff8f",
        "lemon-300": "#90ff5c",
        "lemon-400": "#7aff3c",
        "lemon-500": "#59ff0b",
        "lemon-600": "#51e80a",
        "lemon-700": "#3fb508",
        "lemon-800": "#318c06",
        "lemon-900": "#256b05",
        "gum-50": "#fef1f9",
        "gum-100": "#fcd5ed",
        "gum-200": "#fbc0e4",
        "gum-300": "#f9a4d7",
        "gum-400": "#f892d0",
        "gum-500": "#f677c4",
        "gum-600": "#e06cb2",
        "gum-700": "#af548b",
        "gum-800": "#87416c",
        "gum-900": "#673252",
        "blueberry": "#07061D",
        "background": "#030712",
        "pistachio": "#D3FFCC",
        "cream": "#E2DFCD",
        "foam": "#D7DAE2" 
      }
    },
  },
  plugins: [],
}
export default config
