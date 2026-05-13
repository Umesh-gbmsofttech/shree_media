/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sophisticated Palette
        brand: {
          dark: '#0a0c10',     // Premium Midnight Background
          accent: '#4f46e5',   // Electric Indigo (Primary CTA)
          light: '#f8fafc',    // Clean Surface
          muted: '#94a3b8',    // Professional Muted Text
        },
        // Legacy support (Kept to prevent breaking existing UI)
        primary: '#4f46e5', 
        secondary: '#0f172a',
        accent: '#06b6d4',
        surface: '#f8fafc',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        // Refined soft shadows for glassmorphism
        soft: '0 10px 40px -16px rgba(15, 23, 42, 0.25)',
        glow: '0 0 25px -5px rgba(79, 70, 229, 0.4)',
      },
      backgroundImage: {
        // High-end subtle gradient for hero/headers
        'brand-gradient': 'linear-gradient(135deg, #4f46e5 0%, #2563eb 100%)',
        'subtle-glow': 'radial-gradient(circle at 50% -20%, #4f46e5 0%, #0a0c10 80%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}