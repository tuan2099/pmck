const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      max_width: {
        'user-width': 'calc(100% - 96px)'
      },
      boxShadow: {
        '3xl': '0 -4px 32px rgba(0,0,0,.2);',
        'blue-custom': '0px 4px 34px #e0ebff;',
        'teacher-shadown': '0 5px 13px 6px rgb(212 211 254/23%)',
        'insie-shadown' : 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
      },
      colors: {
        yellowColor: '#eab830',
        grayColor: '#ced4da',
        mainGreenColor: '#1e7115',
        subGreenColor: 'rgb(137, 180, 73)',
        blueColor: '#324FA2',
        color1: '#4F4F4F',
        color2: '#5c5c5c',
        color3: '#292929',
        color4: 'rgba(0, 0, 0, 0.105) ',
        color5: 'rgba(0, 0, 0)'
      },
      lineHeight: {
        150: '150%'
      }
    }
  },
  plugins: []
})
