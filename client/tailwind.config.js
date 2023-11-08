module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
      screens: {
        '2xs': '360px',
        xs: '480px',
        lg: '1100px'
      },
      backgroundImage: {
        wallpaper1: 'url("./img/wallpaper1.jpg")',
        wallpaper2: 'url("./img/wallpaper2.jpg")'
      }
    }
  }
};
