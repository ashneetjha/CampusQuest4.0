/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sherlock': ['Sherlock_Press_Personal_Use', 'serif'],
        'sherlock-press': ['Sherlock Press', 'serif'],
        'kanit': ['Kanit', 'sans-serif'],
        'unifraktur': ['Unifraktur', 'serif'],
        'unifraktur': ['Unifraktur Maguntia', 'serif'],
        'simonetta': ['Simonetta', 'serif'],
        'playfair': ['Playfair Display', 'serif'], 
        'cinzel': ['Cinzel', 'serif'], 
      },
      colors: {
        'golden': '#D4AF37',
        'light-golden': '#FFD67D',
        'dark-golden': '#B8860B',
        'about-golden': '#D2B66D',
        'prize-golden': '#d4af37', // Specific Prize Pool golden color
      },
      backgroundImage: {
        'sh-bg': 'url(https://cdn.s3-assets.com/sh_bg.png)',
        'coin-bg': 'url(https://cdn.s3-assets.com/coin_bg.png)',
        'border-bg': 'url(https://cdn.s3-assets.com/border_bg.png)',
        'about-bg': 'url(/bg.png)',
        'about-border': 'url(/border.png)',
        'timeline-bg': 'url(/background_Timeline.png)',
        'prize-coin-bg': 'url(/coin_bg_poster_page.png)', // Prize Pool backgrounds
        'prize-border': 'url(/border for all bg.png)',
      },
    },
  },
  plugins: [],
}
