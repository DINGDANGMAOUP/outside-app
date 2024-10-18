import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// loader helpers
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

const host = process.env.TAURI_DEV_HOST

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    plugins: [react(), tsconfigPaths(), AutoImport({
      imports: ['react', 'react-i18next', 'react-router-dom'],
      dirs: ['./src/components/**'],
      dts: './src/typing/auto-imports.d.ts',
      resolvers: [
        IconsResolver({
          prefix: 'Icon',
          extension: 'jsx',
          customCollections: ['local'],
        }),
      ],
    }), Icons({
      autoInstall: true,
      compiler: 'jsx',
      customCollections: {
        local: FileSystemIconLoader(
          'src/assets/icons',
          // svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },
    })],
    // resolve: {
    //   alias: {
    //     "@": path.resolve(__dirname, "./src"),
    //   },
    // },
    // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
    //
    // 1. prevent vite from obscuring rust errors
    clearScreen: false,
    // 2. tauri expects a fixed port, fail if that port is not available
    server: {
      port: 1420,
      strictPort: true,
      host: host || false,
      hmr: host
        ? {
            protocol: 'ws',
            host,
            port: 1421,
          }
        : undefined,
      watch: {
        // 3. tell vite to ignore watching `src-tauri`
        ignored: ['**/src-tauri/**'],
      },
    },
  }
})
