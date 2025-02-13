/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content()
  ],
  theme: {
    screens: {
      '2xs': '360px',
      xs: '480px',
      ...defaultTheme.screens,
      lg: '1100px'
    },
    extend: {
      colors: {
        neutral: {
          50: '#fafafa'
        },
        'main-light': '#607785',
        'main-mid': '#1c2b32',
        'main-dark': '#010a0f'
      },
      fontSize: {
        xs: '13px'
      },
      backgroundImage: {
        wallpaper1: 'url("./img/wallpaper1.jpg")',
        wallpaper2: 'url("./img/wallpaper2.jpg")'
      }
    }
  },
  plugins: [
    flowbite.plugin()
  ]
};
