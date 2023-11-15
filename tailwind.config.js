/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      'Poppins':['Poppins','sans-serif'] ,
      'Lato':['Lato', 'sans-serif'],
      'Robot':['Roboto Condensed', 'sans-serif'],
    },
    extend: {
      },
  },
  plugins: [],
}

