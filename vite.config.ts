import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    ViteImageOptimizer({
      /* pass your config */
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
              },
              cleanupIDs: {
                minify: true,
                remove: true,
              },
              convertPathData: false,
            },
          }
        ],
      },
      webp: {
        quality: 50, // Adjust quality (0-100), lower means smaller file size
        lossless: false, // Set to true for lossless compression
        nearLossless: false,
        smartSubsample: true,
        effort: 6, // Compression effort (0-6), higher means better compression but slower
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 50,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 50,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 50,
      },
      cache: false,
      cacheLocation: undefined,
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://brunchtime.org/wp-json/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // remove /api prefix when forwarding
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
