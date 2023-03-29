/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), eslint()],
  build: {
    chunkSizeWarningLimit: 600,
  },
  // define: {
  //   'process.env': {},
  //   'import.meta.env': {},
  //   // Agrega la siguiente configuración
  //   'module.extensions': {
  //     '.jsx': 'js',
  //   },
  // },
});
