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
        eclipse : '#EEFFF9'
     
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

