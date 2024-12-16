import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",

  server: {
    watch: {
      usePolling: true
    },
    proxy: {
      "^/(assistants|threads|ingest|runs)": {
        target: "https://gpt-api-dev.0xai.io",
        changeOrigin: true,
        rewrite: (path) => path.replace("/____LANGSERVE_BASE_URL", ""),

      },
    },
  },
});
