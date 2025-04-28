import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_SERVER_API,
        secure: false,
      },
    },
    hmr: {
      host: '0.0.0.0',
      port: 4173
    },
    host: "0.0.0.0"
  },
  plugins: [react()],
});
