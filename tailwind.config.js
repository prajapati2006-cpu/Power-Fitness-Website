/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'cursive'],
        'dm': ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#F97316',
        'primary-dark': '#ea6304',
        'bg-base': '#080808',
        'bg-card': '#111111',
        'bg-elevated': '#1A1A1A',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 3s ease-out infinite',
        'ken-burns': 'kenBurns 15s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        kenBurns: {
          '0%, 100%': { transform: 'scale(1.0)' },
          '50%': { transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
