import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/eregaudie17.github.io/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        projet1: resolve(__dirname, "pages/projet1.html"),
      },
    },
  },
});