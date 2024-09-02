// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'dot-pattern':
          'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"><rect width="1" height="1" fill="black"/></svg>\')'
      }
    }
  },
  plugins: []
}
