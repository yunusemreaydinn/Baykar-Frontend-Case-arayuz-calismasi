/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#0F172A',
      'secondary': '#78350F',
      'white': '#FFFFFF',
      'black': "#000000"
    },
    fontSize: {
      title: '32px',
      h1: '72px',
    },
    fontFamily: {
      roboto: ['Roboto', 'system-ui'],
    },
    extend: {
      boxShadow: {
        'shd': '0 25px 50px -12px rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [],
}

