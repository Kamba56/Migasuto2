/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppin': ["Poppins", "sans-serif"]
      },
      colors: {
        secondary:  '#336DBA',
        secondary_dark: "#3B4250",
        primary : '#465FF1',
        blue: {
          100: '#26203B'
        },
        blue_fade: "#ECF0FF",
        eclipse : '#EEFFF9',
        home_blue: "#4880FF",
        home_orange: "#FF8743",
        home_purple: "#7A6EFE",
        home_red: "#FF5363"
     
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

