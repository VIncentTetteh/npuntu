/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card-background)',
        border: 'var(--border-color)',
        muted: 'var(--muted-text)',
        primary: {
          DEFAULT: 'rgb(var(--color_41))', // Brand Orange #EC9C24
          50: 'rgba(236, 156, 36, 0.05)',
          100: 'rgba(236, 156, 36, 0.1)',
          200: 'rgba(236, 156, 36, 0.2)',
          300: 'rgba(236, 156, 36, 0.3)',
          400: 'rgba(236, 156, 36, 0.4)',
          500: 'rgba(236, 156, 36, 0.5)',
          600: 'rgb(var(--color_41))',
          700: 'rgba(236, 156, 36, 0.8)',
          800: 'rgba(236, 156, 36, 0.9)',
          900: 'rgba(236, 156, 36, 0.95)',
        },
        secondary: {
          DEFAULT: '#1E1E1E', // Dark Charcoal
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b4b4b4',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#1E1E1E',
        },
        accent: {
          DEFAULT: '#6B7280', // Cool Steel Gray
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        orange: {
          DEFAULT: 'rgb(var(--color_41))', // Brand Orange
          50: '#fef7ee',
          100: '#fdedd7',
          200: '#fad7ae',
          300: '#f6ba7a',
          400: '#f19344',
          500: '#EC9C24', // Brand Orange
          600: '#d67e1e',
          700: '#b3651b',
          800: '#90511d',
          900: '#754419',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
