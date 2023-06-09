/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
