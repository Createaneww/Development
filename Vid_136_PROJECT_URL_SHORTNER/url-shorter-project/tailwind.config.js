// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'background-shine': 'shine 1.5s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '-200% 0%' },
        },
      },
    },
  },
}
