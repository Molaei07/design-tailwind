/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#545BE8',
        'grayText': '#969696',
        'darkGray': '#121212'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}