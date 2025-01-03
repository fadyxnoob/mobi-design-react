/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#682000',
      'light': '#ffffff',
      'dark': '#000000',
      'secondary': '#B05D36',
      'blue': '#0000FF',
      'red': '#ff0000',
      'orange': '#f97316',
      'skyBlue': '#0ea5e9',
      'ButtonBG': '#ce936c',
      'lableBoxBG': '#5b2502'
    },

    extend: {
      backgroundImage: {
        'bannerBG': "url('/src/assets/images/final.png')",
      },

      boxShadow: {
        'custom': '0 10px 18px rgba(176, 93, 54, 0.9)',
      },

      transitionProperty: {
        'transform': 'transform',
      },
      translate: {
        'full': '100%',
      },

      accentColor: {
        primary: '#682000', 
        red: '#DC2626', 

      },
      maxHeight: {
        '600': '500px', // Custom class for max-h-800 with 600px
      },
     
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
})