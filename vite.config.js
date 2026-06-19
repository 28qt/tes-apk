import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: '/tes-apk/',
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "tes-apk",
        short_name: "tes-apk",
        description: "A simple installable PWA built with React and Vite.",
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#1e293b",
        icons: [
          {
            src: "/icons.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "/icons.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});
