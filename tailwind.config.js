/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cannabis-green': '#2d5016',
        'cannabis-light': '#4a7c2e',
        'cannabis-accent': '#8fbc8f',
        'cannabis-brown': '#8b4513',
        'cannabis-light-brown': '#d2691e',
      }
    },
  },
  plugins: [],
}
