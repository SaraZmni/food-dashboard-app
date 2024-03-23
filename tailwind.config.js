/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ebf9fc",
        secondary: "#fe5634",
        main: "#c6c8cc",
        success: "#42c486",
        light: "#ffeae6",
        layout: "#FFAA33",
        crystal: "rgba(255,255,255,0.17)",
      },
      fontFamily: {
        vazir: ["Vazir"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
