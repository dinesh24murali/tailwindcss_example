const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      primary: '#202225',
      secondary: '#5865f2',
      gray: colors.trueGray,
      gray: {
        900: '#202225',
        800: '#2f3136',
        700: '#36393f',
        600: '#4f545c',
        400: '#d4d7dc',
        300: '#e3e5e8',
        200: '#ebedef',
        100: '#f2f3f5',
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      scale: ['active', 'group-hover'],
      borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'focus-visible'],
      borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'focus-visible'],
      borderWidth: ['responsive'],
    },
  },
  plugins: [],
}
