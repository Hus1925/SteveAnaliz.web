import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "client"),
  plugins: [
    react(),
    tsconfigPaths({
      projects: [path.resolve(__dirname, "client/tsconfig.json")]
    })
  ],
  server: {
    port: 3000
  },
  build: {
    outDir: path.resolve(__dirname, "dist/client"),
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "shared") // root dışı paylaşılan dosyalar için alias
    }
  }
});
