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
        dark: "#4D5154",
        primary : '#465FF1',
        blue: {
          100: '#26203B'
        },
        blue_fade: "#ECF0FF",
        eclipse : '#EEFFF9',
        gray: '#9C9AA5'
     
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

