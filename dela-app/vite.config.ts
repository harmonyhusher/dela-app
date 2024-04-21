import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);
console.log(projectRootDir)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "dela-app/src"),
    },
  },
  plugins: [react(), alias()],
})
