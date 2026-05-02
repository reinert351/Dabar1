
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// Fix: Added import for fileURLToPath to resolve __dirname in ESM
import { fileURLToPath } from 'url';
import fs from 'fs';

// Fix: Define __dirname for ESM environment where it is not globally available
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const saveFilePlugin = () => ({
  name: 'save-file-plugin',
  configureServer(server: any) {
    server.middlewares.use('/api/save-file', (req: any, res: any) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk: any) => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            fs.writeFileSync(path.join(__dirname, data.filename), data.content);
            res.statusCode = 200;
            res.end(JSON.stringify({ success: true }));
          } catch (e: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: e.message }));
          }
        });
      } else {
        res.statusCode = 405;
        res.end();
      }
    });
  }
});

export default defineConfig({
  plugins: [react(), saveFilePlugin()],
  server: {
    hmr: { overlay: false }
  },
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  },
  define: {
    'process.env': {
      GEMINI_API_KEY: JSON.stringify(process.env.GEMINI_API_KEY)
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@google/genai'],
        },
      },
    },
  }
});