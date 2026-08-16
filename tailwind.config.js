/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D9F8C',
          50: '#E8F8F5',
          100: '#C8EEE8',
          200: '#96DED4',
          300: '#62CBBE',
          400: '#32B7A7',
          500: '#0D9F8C',
          600: '#0A8979',
          700: '#087466',
          800: '#065C52',
          900: '#04473F',
        },

        secondary: '#102B3F',

        background: '#FFFFFF',

        surface: '#F8FAFC',

        text: {
          primary: '#102B3F',
          secondary: '#52637A',
          muted: '#94A3B8',
          white: '#FFFFFF',
        },

        success: '#16A085',
        warning: '#F59E0B',
        error: '#EF4444',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter'],
        'inter-medium': ['Inter-Medium'],
        'inter-semibold': ['Inter-SemiBold'],
        'inter-bold': ['Inter-Bold'],
      },

      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '26px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '38px' }],
        '4xl': ['36px', { lineHeight: '44px' }],
        '5xl': ['48px', { lineHeight: '56px' }],
      },

      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        xl: '20px',
        '2xl': '24px',
      },

      spacing: {
        18: '72px',
        22: '88px',
        26: '104px',
      },
    },
  },
  plugins: [],
};
