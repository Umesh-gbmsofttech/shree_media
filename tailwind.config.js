/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4169e1',
        'brand-bg': '#ffffff',
        'brand-text': '#676767',
        'font-color': 'oklch(0.279 0.041 260.031)',
        'card-color': 'rgb(59, 130, 246)',
        'section-heading': 'oklch(0.279 0.041 260.031)',
      },
      fontFamily: {
        poppins: [ 'Poppins', 'sans-serif' ],
        montserrat: [ 'Montserrat', 'sans-serif' ],
        'open-sans': [ '"Open Sans"', 'Roboto', 'system-ui', 'sans-serif' ],
      },
      fontSize: {
        '20px': '20px',
        '14px': '14px',
      },
      fontWeight: {
        '700': '700',
      },
      lineHeight: {
        '20px': '20px',
        '28px': '28px',
      },
    },
  },
  plugins: [],
}