// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    keyframes: {
      'carousel-move': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' }
      }
    },
    animation: {
      'carousel-move': 'carousel-move var(--duration,80s) infinite'
    },
    extend: {
      colors: {
        background: '#334155',
        textPrimary: '#fff',
        textSecondary: '#875'
      },
      screens: {
        sm: { min: '0px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
        lg: { min: '1200px' } // Desktop smallest.
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
