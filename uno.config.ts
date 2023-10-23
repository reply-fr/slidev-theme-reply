import { defineConfig } from "unocss";

const colors = {
  green: "#02D34A",
  red: "#f8004f",
  "certif-fondational": "#212D3C",
  "certif-associate": "#2D77EA",
  "certif-professional": "#2CC0B1",
  "certif-specialty": "#4D26AA",
};

const safelist: string[] = [];
for (const color in colors) {
  safelist.push(`bg-${color}`);
  safelist.push(`text-${color}`);
  safelist.push(`border-${color}`);
}

export default defineConfig({
  theme: {
    colors,
  },
  safelist,
});
