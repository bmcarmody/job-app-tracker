/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Golos Text'],
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}
