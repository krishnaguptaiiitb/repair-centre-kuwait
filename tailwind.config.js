/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#bce6ff',
          300: '#8ed7ff',
          400: '#59beff',
          500: '#329fff',
          600: '#1b80f5',
          700: '#1468e1',
          800: '#1754b6',
          900: '#19498f',
          950: '#142e57',
        },
        accent: {
          50: '#ecfdff',
          100: '#cff9ff',
          200: '#a4f1ff',
          300: '#6ce6ff',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0894b3',
          700: '#0e7691',
          800: '#155f75',
          900: '#154f63',
          950: '#083344',
        },
        success: {
          50: '#edfcf2',
          100: '#d3f9e0',
          500: '#22c55e',
          700: '#15803d',
        },
        warning: {
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          500: '#ef4444',
          700: '#b91c1c',
        },
        ink: {
          50: '#f6f8fb',
          100: '#eef2f7',
          200: '#dde5ef',
          300: '#c2d0e0',
          400: '#93a7bf',
          500: '#6b81a0',
          600: '#52688a',
          700: '#435673',
          800: '#384861',
          900: '#0b1220',
          950: '#060a14',
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16,1,0.3,1) both',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
