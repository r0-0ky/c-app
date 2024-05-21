import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'info': "url('../src/shared/images/boom.png'), radial-gradient(circle, rgba(0,212,255,1) 15%, rgba(12,0,219,1) 98%)",
        'menu': "url('../src/shared/images/points.png'), radial-gradient(circle, rgba(255,222,0,1) 13%, rgba(255,124,0,1) 100%)",
        'play-button': "url('../src/shared/images/play.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
