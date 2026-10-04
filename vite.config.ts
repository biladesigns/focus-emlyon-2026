import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  // Paquets CommonJS que Node ne sait pas importer par nom : integres au
  // bundle du pre-rendu plutot que charges depuis node_modules.
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Use esbuild for minification (built-in, faster than terser)
    minify: "esbuild",
    // Chunk splitting for better caching
    // Le build serveur (pre-rendu) ne sert qu'a generer le HTML, pas de decoupage.
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              vendor: ["react", "react-dom", "react-router-dom"],
              ui: ["@radix-ui/react-dialog", "@radix-ui/react-tooltip", "@radix-ui/react-toast"],
            },
          },
        },
    // Generate source maps only in dev
    sourcemap: mode === "development",
    // Target modern browsers
    target: "es2020",
    // Report compressed size
    reportCompressedSize: true,
  },
}));
