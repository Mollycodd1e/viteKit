import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['cjs'],
	dts: true,
	splitting: false,
	clean: true,
	sourcemap: true,
	minify: true,
	external: ['react', 'react-dom', 'react/jsx-runtime'],
	esbuildOptions(options) {
		options.resolveExtensions = ['.ts', '.tsx', '.js', '.jsx', '.json'] // Добавляем .ts в приоритет
		options.loader = {
			...options.loader,
			'.ts': 'ts', // Явно указываем загрузчик для .ts файлов
		}
	},
})
