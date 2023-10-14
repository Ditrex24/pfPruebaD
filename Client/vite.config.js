import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'custom-resolver',
          resolveId(id) {
            // Personaliza la resolución para ciertos módulos
            if (id.startsWith('@/')) {
              return path.resolve(__dirname, 'src', id.slice(2));
            }
            return null;
          },
        },
      ],
    },
  },
});
