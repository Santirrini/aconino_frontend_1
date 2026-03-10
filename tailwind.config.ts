import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#0c2070",
                secondary: "#365ca1",
                accent: "#f8b719",
            },
            fontFamily: {
                sans: ["var(--font-manrope)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
