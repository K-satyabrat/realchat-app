/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        border: "border 4s linear infinite",
      },
      keyframes: {
        border: {
          "0%": {
            "--border-angle": "0turn",
          },
          "100%": {
            "--border-angle": "1turn",
          },
        },
      },

      animation: {
        border: "border 3s linear infinite",
      },
    },
  },

  plugins: [daisyui],
};
