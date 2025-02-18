/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B4D8",
        secondary: "#E31B6D",
        dark: "#011627"
      }
    },
  },
  plugins: [],
};