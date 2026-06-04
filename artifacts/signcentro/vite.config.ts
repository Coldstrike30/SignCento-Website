import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

// compute a reliable __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// allow sensible defaults for local development on Windows
const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;

if (rawPort && (Number.isNaN(port) || port <= 0)) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? "/";

// guard Replit-only plugins — ignore if not available locally
const devPlugins = [];
if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
  try {
    // dynamic import, best-effort; may fail outside Replit
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const carto = await import("@replit/vite-plugin-cartographer");
    devPlugins.push(
      carto.cartographer({
        root: path.resolve(__dirname, ".."),
      }),
    );
    const devBanner = await import("@replit/vite-plugin-dev-banner");
    devPlugins.push(devBanner.devBanner());
  } catch (e) {
    // ignore missing Replit dev plugins when running locally
  }
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...devPlugins,
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
