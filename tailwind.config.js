// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'dot-pattern':
          'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"><rect width="1" height="1" fill="black"/></svg>\')'
      },
      colors: {
        pastel: {
          light: {
            pink: '#FFB3C1',
            mint: '#A4D65E',
            yellow: '#F9EFB8',
            sky: '#A4D8E1',
            lavender: '#D8BFD8'
          },
          dark: {
            pink: '#FFC1D1',
            mint: '#C3E9A4',
            yellow: '#FDFD8A',
            sky: '#B3E1E8',
            lavender: '#E4C6E9'
          }
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
