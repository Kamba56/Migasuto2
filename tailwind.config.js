/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'authbg': "url('../images/authimg.png')",

      },
      fontFamily: {
        'poppin': ["Poppins", "sans-serif"]
      },
      colors: {
        secondary:  '#336DBA',
        secondary_dark: "#3B4250",
        primary : '#465FF1',
        blue: {
          10: '#465FF1',
          20: '#336DBA',
          30: 'rgba(70, 95, 241, 0.40)',
          100: '#26203B'
        },
        blue_fade: "#ECF0FF",
        eclipse : '#EEFFF9',
        home_blue: "#4880FF",
        home_orange: "#FF8743",
        home_purple: "#7A6EFE",
        home_red: "#FF5363",
      
        grey: {
          10: '#ECF0FF',
          20: '#9C9AA5'
        },
        red: {
          10: '#E45270',
        }
     
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

