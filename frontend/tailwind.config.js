module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      minHeight: {
        'screen-mobile': 'calc(var(--vh, 1vh) * 100)'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
