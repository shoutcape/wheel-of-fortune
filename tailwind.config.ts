import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fill: {
        '0.1': 'var(--ten-cent)',
        '0.2': 'var(--twenty-cent)',
        '0.5': 'var(--fifty-cent)',
        '1': 'var(--one-euro)',
        '2': 'var(--two-euro)',
      },
      backgroundColor: {
        one: 'var(--one)',
        two: 'var(--two)',
        five: 'var(--five)',
        ten: 'var(--ten)',
        cf: 'var(--cf)',
        pch: 'var(--pch)',
        ch: 'var(--ch)',
        jp: 'var(--jp)',
      },
      fontFamily: {
        rye: ['var(--font-rye)']
      }
    }
  },
};
export default config;
