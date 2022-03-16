const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        santis: {
          gold: '#CC8434',
          purple: '#5A0F39',
          pink: '#FFE6DE',
          darkblue: '#0A1829',
        },
      },
      fontFamily: {
        trajan: ['Trajan Pro', ...defaultTheme.fontFamily.serif],
        baskerville: ['Baskerville', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(180deg, rgba(50,27,45,1) 0%, transparent 80%);',
      },
    },
  },
  plugins: [],
};
