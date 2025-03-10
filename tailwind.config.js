/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4caf50',
          dark: '#388e3c',
          light: '#81c784',
        },
        secondary: {
          DEFAULT: '#2196f3',
          dark: '#1976d2',
          light: '#64b5f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      container: {
        center: true,
        padding: '2rem',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
      },
    },
  },
  plugins: [],
  important: true,
} 