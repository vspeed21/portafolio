/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.js",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#47B5FF',
        'body-dark': '#192229',
        'content': '#212e36'
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.contenedor':{
          width: '90%',
          maxWidth: '75rem',
          margin: '0 auto'
        },
        '.hero': {
          backgroundImage: "linear-gradient(to right, rgb(0 0 0 /.7) 50%, rgb(0 0 0 /.9) 100%), url('/img/header.png')"
        }
      });
    })
  ],
}
