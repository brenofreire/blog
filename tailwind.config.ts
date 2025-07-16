import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Pastel organic palette
        sage: {
          soft: "hsl(140, 25%, 88%)",
          light: "hsl(140, 20%, 85%)",
          medium: "hsl(140, 25%, 70%)",
          deep: "hsl(140, 30%, 55%)",
        },
        forest: {
          light: "hsl(160, 20%, 75%)",
          medium: "hsl(160, 25%, 60%)",
          deep: "hsl(160, 30%, 25%)",
          darker: "hsl(160, 35%, 15%)",
        },
        peach: {
          soft: "hsl(35, 60%, 90%)",
          warm: "hsl(35, 85%, 65%)",
          medium: "hsl(35, 80%, 60%)",
          deep: "hsl(35, 75%, 55%)",
        },
        cream: {
          light: "hsl(40, 30%, 98%)",
          soft: "hsl(40, 25%, 95%)",
          warm: "hsl(40, 20%, 92%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        script: ["var(--font-dancing-script)", "cursive"],
        organic: ["var(--font-comfortaa)", "sans-serif"],
      },
      backgroundImage: {
        "organic-gradient": "linear-gradient(135deg, #2d4a3e 0%, #1a2e24 100%)",
        "golden-gradient": "linear-gradient(135deg, #f2a541 0%, #e8941f 100%)",
        "accent-gradient": "linear-gradient(135deg, #7fb069 0%, #a7c957 100%)",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(140, 180, 160, 0.15)",
        warm: "0 4px 20px rgba(242, 165, 65, 0.2)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
