/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212529',
        'primary-2nd': '#2D3339',
        gray: '#646F7D',
        secondary: '#70E000',
        'accent': '#8646DC',
      },
      fontFamily: {
        inter: 'Inter',
        habibi: 'Habibi',
        hammersmith: 'Hammersmith One'
      },
    },
  },
  plugins: [],
}

