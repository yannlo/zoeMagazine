/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange":{
          DEFAULT: '#FD7800',
        },
        "green":{
          DEFAULT: '#5DB700',
        },
        "gray":{
          DEFAULT: '#DBDBDB',
        },
        "black":{
          DEFAULT: '#0F0F0F',
        },
        "white":{
          DEFAULT: '#FFFFF0',
        },
      },
      fontFamily: {
        'sans': ['Roboto', 'Sans serif'],
      },
    },
  },
  plugins: [],
}