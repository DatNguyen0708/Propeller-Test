module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
      'water': "url('/images/type/water.svg')",
      'fire': "url('/images/type/fire.svg')",
    },
    zIndex: {
      100: '100',
    }
  },
  plugins: [],
  important: true,
};
