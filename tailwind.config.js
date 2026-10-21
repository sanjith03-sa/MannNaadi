/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        krishi: {
          green: {
            DEFAULT: '#166534',
            dark: '#14532d',
            light: '#22c55e',
            subtle: '#dcfce7',
          },
          harvest: {
            DEFAULT: '#FACC15',
            light: '#fef08a',
            dark: '#ca8a04',
          },
          soil: {
            DEFAULT: '#92400E',
            light: '#b45309',
            subtle: '#fef3c7',
          },
          safe: '#16A34A',
          warning: '#F59E0B',
          alert: '#DC2626',
          bg: '#FAFAF7',
          card: '#FFFFFF',
          charcoal: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(22, 101, 52, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(22, 101, 52, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 25px rgba(34, 197, 94, 0.35)',
      }
    },
  },
  plugins: [],
}
