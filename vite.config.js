import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Si usas rutas de importación absolutas, puedes configurarlas aquí
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build', // Mantener el mismo directorio de salida que CRA
    sourcemap: false, // Desactivar sourcemaps en producción para reducir tamaño
    // Optimizaciones adicionales
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor code para mejor caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 3000, // Mismo puerto que CRA
    open: true,
  },
});
