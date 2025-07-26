/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff0080',
          blue: '#0080ff',
          green: '#00ff80',
          purple: '#8000ff',
          yellow: '#ffff00',
        },
        casino: {
          dark: '#0a0a0f',
          darker: '#050508',
          card: '#1a1a2e',
          accent: '#16213e',
        }
      },
      boxShadow: {
        'neon': '0 0 20px currentColor',
        'neon-lg': '0 0 40px currentColor',
        'neon-xl': '0 0 60px currentColor',
      },
      animation: {
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px currentColor' },
          '100%': { boxShadow: '0 0 40px currentColor, 0 0 60px currentColor' },
        }
      }
    },
  },
  plugins: [],
}