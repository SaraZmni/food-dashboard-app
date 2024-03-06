/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ebf9fc',
        secondary:'#fe5634',
        main:'#c6c8cc',
        success:'#42c486',
        light:'#ffeae6'
      },
      fontFamily: {
        vazir: ['Vazir'],
      },
    },
    
    
  },
  variants: {
    extend: {},
  },
  plugins: []
}
