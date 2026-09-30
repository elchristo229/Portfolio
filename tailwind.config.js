/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#080c14',
          900: '#0b111b',
          850: '#0d1420',
          800: '#121d2a',
          700: '#253344',
          600: '#42566a',
          border: 'rgba(0, 240, 255, 0.16)',
        },
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#7df7ff',
          400: '#00f0ff',
          500: '#00c8d8',
          600: '#0097a6',
          700: '#087d89',
        },
        emerald: {
          400: '#54ff9a',
          500: '#00d957',
          600: '#00a842',
        }
      },
      backgroundColor: {
        'soc-base': '#080c14',
        'soc-surface': '#0b111b',
        'soc-raised': '#0d1420',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Raleway', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'float': 'float 5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(6, 182, 212, 0.25), 0 0 30px rgba(16, 185, 129, 0.15)' },
          '100%': { boxShadow: '0 0 25px rgba(6, 182, 212, 0.45), 0 0 50px rgba(16, 185, 129, 0.25)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
