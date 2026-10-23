/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--shadcn-background))",
        foreground: "hsl(var(--shadcn-foreground))",
        card: {
          DEFAULT: "hsl(var(--shadcn-card))",
          foreground: "hsl(var(--shadcn-card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--shadcn-primary))",
          foreground: "hsl(var(--shadcn-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--shadcn-secondary))",
          foreground: "hsl(var(--shadcn-secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--shadcn-muted))",
          foreground: "hsl(var(--shadcn-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--shadcn-accent))",
          foreground: "hsl(var(--shadcn-accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--shadcn-border))",
        input: "hsl(var(--shadcn-input))",
        ring: "hsl(var(--shadcn-ring))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
