import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
			include: '**/*.svg',
		}),
	],
	ssr: {
		noExternal: true,
	},
	server: {
		host: '0.0.0.0',
	},
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, 'lib/main.ts'),
			formats: ['es'],
		},
		minify: true,
		sourcemap: true,
		rollupOptions: {
			external: ['react', 'react/jsx-runtime'],
			input: Object.fromEntries(
				glob
					.sync('lib/**/*.{ts,tsx}', {
						ignore: ['lib/**/*.d.ts'],
					})
					.map((file) => [
						relative('lib', file.slice(0, file.length - extname(file).length)),
						fileURLToPath(new URL(file, import.meta.url)),
					])
			),
			output: {
				entryFileNames: '[name].js',
			},
		},
	},
})
