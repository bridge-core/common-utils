import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			name: 'DashCompiler',
			fileName: (format) => `common-utils.${format}.js`,
		},
		rollupOptions: {
			external: ['path-browserify'],
		},
	},
})
