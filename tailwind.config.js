// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Incluye todos los archivos dentro de la carpeta pages
    './components/**/*.{js,ts,jsx,tsx}',  // Incluye todos los archivos dentro de la carpeta components
    './src/**/*.{js,ts,jsx,tsx}',  // Incluye todos los archivos dentro de la carpeta src (si estás usando una estructura basada en src)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
