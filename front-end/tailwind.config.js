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
      },
      colors: {
        modalColor: 'rgba(0,0,0,0.7)',
        yellowColor: '#eab830',
        grayColor: '#ced4da',
        mainGreenColor: 'rgb(30, 113, 21)',
        subGreenColor: 'rgb(137, 180, 73)',
        blueColor: "rgb(0, 86, 210)"
      },
      screens: {
        '601': '601px',
        '500': '500px',
        '480': '480px',
        '425': '425px',
        '360': '360px',
        '842': '842px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      lineHeight: {
        '150': '150%',
      },
    }
  },
  plugins: []
}
