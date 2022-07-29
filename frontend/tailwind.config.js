/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      extend: {
        backgroundImage: {
          bgImage: "url('https://i.ibb.co/TLjHJzh/bgImg.webp')",
        },
      },
      colors: {
        lgColor: "#68e5b2",
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          primary: "#FF574B",
          secondary: "#FF556B",
          accent: "#1FB2A6",
          neutral: "#191D24",
          "base-100": "#ffff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      // {
      //   dark: {
      //   "primary": "#36D399",
      //   "secondary": "#3ABFF8",
      //   "accent": "#1FB2A6",
      //   "neutral": "#191D24",
      //   "base-100": "#ffff",
      //   "info": "#3ABFF8",
      //   "success": "#36D399",
      //   "warning": "#FBBD23",
      //   "error": "#F87272",
      //   },
      // },
    ],
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
