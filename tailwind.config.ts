/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { min: "320px", max: "393px" },
      // => @media (min-width: 320px and max-width: 393px) { ... }

      mobileBig: { min: "412px", max: "428px" },
      // => @media (min-width: 412px and max-width: 428px) { ... }

      desktop: { min: "768px", max: "1920px" },
      // => @media (min-width: 768px and max-width: 1920px) { ... }
    },
    colors: {
      "Light-red": "#ff5757",
      "Orangey-yellow": "#ffb01f",
      "Green-teal": "#00bd91",
      "Cobalt-blue": "#1125d4",
      "Light-slate-blue": "#7857ff",
      "Light-royal-blue": "#2e2be9",
      "Violet-blue": "#4e21ca",
      "Persian-blue": "#2421ca",
      "Off-White": "#fffdfa",
      "Pale-blue": "#ebf1ff",
      "Light-lavender": "#c8c7ff",
      "Dark-gray-blue": "#303b5a",
    },
    extend: {},
  },
  plugins: [],
};
