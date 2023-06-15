module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#fafafa'
        }
      },
      fontSize: {
        xs: '13px'
      },
      screens: {
        '2xs': '360px',
        xs: '480px'
      },
      minHeight: {
        'screen-mobile': 'calc(var(--vh, 1vh) * 100)'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
