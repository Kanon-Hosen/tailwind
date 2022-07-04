/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      width: {
        '85': '90%',
        '80': '80%',
        '70': '70%',
        '60': '60%',
        '50': '50%',
      }
    },
    fontFamily:{
      poppins:['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
