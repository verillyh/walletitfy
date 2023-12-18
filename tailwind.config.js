/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.{html,js}'
  ],
  theme: {
    colors: {
      'primary': '#212529',
      'primary-lighter': '#2D3339',
      'gray': '#646F7D',
      'secondary': '#70E000',
      'purple-lighter': '#8646DC'
    },
    fontFamily: {
      inter: 'Inter',
      habibi: 'Habibi',
      hammersmith: 'Hammersmith One'
    },
    extend: {},
  },
  plugins: [],
}

