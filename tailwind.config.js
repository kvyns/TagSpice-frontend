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
  },
}, 
safelist: [
  'bg-red-800', 'outline-red-600',
  'bg-green-800', 'outline-green-600',
  'bg-yellow-800', 'outline-yellow-600',
],
  plugins: ['@tailwindcss/forms'],
}