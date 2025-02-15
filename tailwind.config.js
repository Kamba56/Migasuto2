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
        blue: {
          100: '#26203B'
        },
        'primary-90': 'var(--Primary-90, #084298)',
      }
    },
  },
  plugins: [],
}

