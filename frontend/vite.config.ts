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
        target: "http://192.168.20.158:8000",
        // changeOrigin: true,
        // rewrite: (path) => path.replace("/____LANGSERVE_BASE_URL", ""),
        
        headers: {
          "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGluZ1RyYWNlIFByb2R1Y3Rpb24iLCJ1c2VyX2lkIjoiNjc0M2ViNWU5ZTQxZWQ3OTYwNDlkNGRjIiwiYXBwX2lkIjoiNjc0M2Y0MGRmMGM0YzNiNzBjOTM1ZDZmIn0.MXQWk_EA8T3NjbU80tGlLkMcWQd_zAPeNixtz7LGoSs"
        }
      },
    },
  },
});
