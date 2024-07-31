/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'bg': '#131418',
        'card-bg' : '#1c1e2a'
      },
      boxShadow: {
        '2xl-white': '0 25px 50px 0px rgba(255, 255, 255, 0.25)',
    },
  },
}, 
  plugins: ['@tailwindcss/forms'],
}