/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      max_width: {
        'user-width': 'calc(100% - 96px)'
      }
    }
  },
  plugins: []
}
