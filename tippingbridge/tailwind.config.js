/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rich luxury brand palette
        brandGold: {
          50: '#FFFBF0',
          100: '#FEF7E6',
          200: '#FCEFCC',
          300: '#F9E7B2',
          400: '#F7DF98',
          500: '#F4D77E',
          600: '#D4B866',
          700: '#B4994E',
          800: '#947A36',
          900: '#745B1E',
          DEFAULT: '#E4BF7A', // Rich warm gold
        },
        brandGreen: {
          50: '#F0F9F7',
          100: '#D1EDE6',
          200: '#A3DBCD',
          300: '#75C9B4',
          400: '#47B79B',
          500: '#2D7F6B', // Deep teal-green
          600: '#256A59',
          700: '#1E5547',
          800: '#174035',
          900: '#102B23',
          DEFAULT: '#1A5C4D', // Richer deep teal
        },
        brandPink: {
          50: '#FFF5F8',
          100: '#FFE5EC',
          200: '#FFCBD9',
          300: '#FFB1C6',
          400: '#FF97B3',
          500: '#FF7DA0',
          600: '#E6678D',
          700: '#CC517A',
          800: '#B33B67',
          900: '#992554',
          DEFAULT: '#FFB6C1', // Soft elegant pink
        },
        brandBlue: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#87CEEB', // Sky blue
          600: '#6BA8C5',
          700: '#4F829F',
          800: '#335C79',
          900: '#173653',
          DEFAULT: '#5AAED9', // Richer sky blue
        },
        brandCream: {
          50: '#FFFEFB',
          100: '#FFFDF7',
          200: '#FFFBEF',
          300: '#FFF9E7',
          400: '#FFF7DF',
          500: '#FFF8E7',
          600: '#E6D9CF',
          700: '#CCBAB7',
          800: '#B39B9F',
          900: '#997C87',
          DEFAULT: '#FFF8E7', // Soft cream
        },

        // Primary scale (using rich brandGreen as base)
        primary: {
          50: '#F0F9F7',
          100: '#D1EDE6',
          200: '#A3DBCD',
          300: '#75C9B4',
          400: '#47B79B',
          500: '#2D7F6B',
          600: '#1A5C4D',
          700: '#174035',
          800: '#102B23',
          900: '#0A1D18',
        },
      },
    },
  },
  plugins: [],
}
