/** @type {import('tailwindcss').Config} */
const colors = require('./src/colors.json')
const hinter = require('hinter')

module.exports = {
  content: {
    files: [
        "./index.html",
        "./src/**/*.{js,ts,vue}",
    ],
    transform: content => hinter(content, { colors: [...colors, 'slate'] }),
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
