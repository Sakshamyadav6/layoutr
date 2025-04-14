/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js/jsx }"],
  safelist: [
    {
      pattern:
        /bg-(red|blue|green|gray|yellow|purple)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /text-(red|blue|green|gray|yellow|purple)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /border-(red|blue|green|gray|yellow|purple)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
