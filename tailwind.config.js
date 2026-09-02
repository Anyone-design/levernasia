/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#08090C',
          darker: '#040507',
          surface: '#11141C',
          surfaceElevated: '#171B26',
          border: 'rgba(230, 184, 106, 0.15)',
          gold: {
            light: '#F5D38E',
            DEFAULT: '#E6B86A',
            dark: '#C8933E',
            glow: 'rgba(230, 184, 106, 0.4)'
          },
          neon: {
            magenta: '#FF2E93',
            cyan: '#00F0FF',
            purple: '#9D4EDD',
            emerald: '#10B981'
          },
          muted: '#8E95A5',
          light: '#F3F4F6'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        accent: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5D38E 0%, #E6B86A 50%, #C8933E 100%)',
        'dark-glass': 'linear-gradient(135deg, rgba(23, 27, 38, 0.7) 0%, rgba(17, 20, 28, 0.85) 100%)',
        'radial-gold': 'radial-gradient(circle at 50% 0%, rgba(230, 184, 106, 0.18) 0%, rgba(8, 9, 12, 0) 70%)',
        'hero-pattern': 'radial-gradient(circle at 80% 20%, rgba(157, 78, 221, 0.15) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(230, 184, 106, 0.12) 0%, transparent 40%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      boxShadow: {
        'gold-sm': '0 0 15px -3px rgba(230, 184, 106, 0.25)',
        'gold-md': '0 0 25px -2px rgba(230, 184, 106, 0.35)',
        'gold-lg': '0 0 45px -4px rgba(230, 184, 106, 0.45)',
        'neon-magenta': '0 0 30px -5px rgba(255, 46, 147, 0.4)',
        'neon-purple': '0 0 30px -5px rgba(157, 78, 221, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }
    },
  },
  plugins: [],
}
