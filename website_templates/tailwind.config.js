/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // Main portal - modern geometric sans
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        // Corporate - professional serif for headings, clean sans for body
        corporate: {
          heading: ['Playfair Display', 'Georgia', 'serif'],
          body: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        },
        // Portfolio - elegant display font
        portfolio: {
          display: ['Space Grotesk', 'system-ui', 'sans-serif'],
          body: ['Inter', 'system-ui', 'sans-serif'],
        },
        // SaaS - modern tech sans
        saas: {
          heading: ['Poppins', 'system-ui', 'sans-serif'],
          body: ['Open Sans', 'system-ui', 'sans-serif'],
        },
        // E-commerce - friendly readable sans
        ecommerce: {
          heading: ['Montserrat', 'system-ui', 'sans-serif'],
          body: ['Lato', 'system-ui', 'sans-serif'],
        },
        // Blog - editorial serif
        blog: {
          heading: ['Merriweather', 'Georgia', 'serif'],
          body: ['Lora', 'Georgia', 'serif'],
        },
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-sm': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero': ['clamp(2.5rem, 5vw + 1rem, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      letterSpacing: {
        'tighter': '-0.03em',
        'tight': '-0.02em',
        'wide': '0.05em',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
    },
  },
  plugins: [],
}
