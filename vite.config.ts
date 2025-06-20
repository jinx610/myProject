import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }: {mode: string}) => {
  // 加载对应环境变量文件，mode 是 'development' 或 'production'
  const env = loadEnv(mode, process.cwd(), '')

  return defineConfig({
    plugins: [react()],
    server: {
      port: Number(env.VITE_PORT) || 3000,
      proxy: mode === 'production'
        ? {
            // 生产环境的代理配置
            '/api': {
              target: env.VITE_API_BASE_URL,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ''),
            },
          }
        : {
            // 开发环境的代理配置
            '/api': {
              target: env.VITE_API_BASE_URL,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ''),
            },
          }
    },
    build: {
      outDir: 'dist',
      sourcemap: mode !== 'production',
    },
    define: {
      __APP_ENV__: JSON.stringify(mode),
    }
  })
}
