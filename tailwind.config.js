/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-page": "var(--background-page)",
        "background-card": "var(--background-card)",
        "border-default": "var(--border-default)",
        "brand-primary": "var(--brand-primary)",
        "accent-info": "var(--accent-info)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "text-subtle": "var(--text-subtle)",
        "text-tertiary": "var(--text-tertiary)",
        "status-positive": "var(--status-positive)",
        "status-negative": "var(--status-negative)",
      },
      fontFamily: {
        sf: ['"SF Pro"', "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        plex: ['"IBM Plex Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
