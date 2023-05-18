/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      max_width: {
        'user-width': 'calc(100% - 96px)'
      },
      boxShadow: {
        '3xl': '0 -4px 32px rgba(0,0,0,.2);'
      }
    }
  },
  plugins: []
}
