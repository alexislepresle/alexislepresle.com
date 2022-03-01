module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => ({
      'black': '#494949',
      'gray-400': 'rgba(73, 105, 153, 0.47)',
      'white': '#FFF',
      'indigo-600': '#4F46E5',
      'gray-700': '#7D8FAA'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
