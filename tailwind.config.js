/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        "secondray":"#1B6392",
        "gray-800":"#303639",
        "gray-900":"#191C1F",
        "warning-300":"#F3DE6D",
        "warning-500":"#EBC80C"
      }
    },
  },
  plugins: [],
}