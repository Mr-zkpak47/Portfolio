/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animations: {
        bounce:
          "bounce 0.5s alternate cubic-beizer(0.95,0.05,0.795,0.035) infinite",
        slideUpCubiBezier: "slideUp 2s cubic-beizer(0.165, 0.84, 0.44, 1)",
      },
      keyframes: {
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0px)" },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
      },
      typography: {
        "center-last": {
          css: {
            "text-align-last": "center",
          },
        },
      },
    },
  },
  plugins: [],
  mode : "jit"

  // plugins: [require('@tailwindcss/typography')],
};
