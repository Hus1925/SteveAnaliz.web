export default defineConfig({
  root: 'client',
  plugins: [
    react(),
    tsconfigPaths({
      projects: [path.resolve(__dirname, 'client/tsconfig.json')]
    })
  ],
  build: {
    outDir: '../dist/client', // dist içinde daha düzenli yapı
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, 'shared') // Eğer shared klasörü varsa örnek
    }
  }
});
