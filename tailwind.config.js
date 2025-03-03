/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2", 
        secondary: "#FF4081",
      },
      fontFamily: {
        sans: ["Merriweather", "sans-serif"], 
      },
    },
  },
  plugins: [],
}

