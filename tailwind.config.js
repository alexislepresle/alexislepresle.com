module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => ({
      'black': '#494949',
      'white': '#FFF',
      'indigo-600': '#4F46E5',
      'gray-400': '#F9F9F9',
      'gray-700': '#7D8FAA'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
