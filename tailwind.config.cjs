// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#121212',
        darksurface: '#1E1E1E',
        primary: '#8B5CF6', // Purple
        secondary: '#10B981', // Green
        accent: '#F59E0B', // Amber
        textprimary: '#F3F4F6',
        textsecondary: '#D1D5DB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
