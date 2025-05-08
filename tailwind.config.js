/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6faf7',
          100: '#ccf6ef',
          200: '#99ede0',
          300: '#66e3d0',
          400: '#33dac1',
          500: '#0DD3B2', // Primary teal
          600: '#0ba890',
          700: '#097e6c',
          800: '#065448',
          900: '#032a24',
        },
        dark: {
          100: '#d1d2d4',
          200: '#a3a5aa',
          300: '#76797f',
          400: '#484c55',
          500: '#1A1E2A', // Dark background
          600: '#15181f',
          700: '#101215',
          800: '#0A0C0A',
          900: '#050605',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          900: '#064e3b',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};