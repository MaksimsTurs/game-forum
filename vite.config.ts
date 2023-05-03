import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import { createHtmlPlugin } from 'vite-plugin-html'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'

export default defineConfig({
	appType: 'spa',
	server: {
		host: true,
	},
	build: {
		minify: 'terser',
		terserOptions: {
			ecma: 2020,
			compress: {
				arguments: true,
				drop_console: true,
				drop_debugger: true,
				expression: true,
			},
		},
		outDir: './build/',
		reportCompressedSize: false,
		chunkSizeWarningLimit: 250,
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo: { name: any }) => {
					let extType = assetInfo.name!.split('.').at(1)
					if (/png|jpe?g|webp/i.test(String(extType))) {
						extType = 'img'
					}
					return `assets/${extType}/[name]-[hash][extname]`
				},
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',
			},
		},
	},
	css: {
		modules: {
			scopeBehaviour: 'local',
			localsConvention: 'dashes',
		},
	},
	plugins: [
		imagetools({
			removeMetadata: true,
		}),
		createHtmlPlugin({ minify: true }),
		imagePresets({
			thumbnail: widthPreset({
				class: 'img thumb',
				loading: 'lazy',
				widths: [40, 90],
				formats: {
					webp: { quality: 10 },
				},
			}),
		}),
	],
})
