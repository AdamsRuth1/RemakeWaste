/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './auth/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        brand:{
          100:"#1a362b",
          200:"#BDC1C6",
          300:"#fffada",
          400:"#d9d9d9",
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        capriola: ['var(--font-capriola)'],
        
      },
    },
  },
  plugins: [],
}
