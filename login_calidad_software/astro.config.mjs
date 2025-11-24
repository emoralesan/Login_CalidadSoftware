import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  output: "server",
  integrations: [
    react()
  ],

  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        "@src": path.resolve("./src"),
        "@components": path.resolve("./src/components"),
        "@libs": path.resolve("./src/libs"),
        "@layouts": path.resolve("./src/layouts"),
        "@assets": path.resolve("./src/assets"),
      },
    },
  },
});
