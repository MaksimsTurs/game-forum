import { defineConfig as viteConfig } from 'vite'

//Vite HTML minification
import { createHtmlPlugin as viteHTMLPlugins } from 'vite-plugin-html'

//Vite Image optimization and convertion
import { imagetools as viteImageTools } from 'vite-imagetools'
import { ViteImageOptimizer as viteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteImagePresets, { widthPreset } from 'vite-plugin-image-presets'

//Font optimization
import viteWebFont from 'vite-plugin-webfont-dl'

//CSS Optimization
import { optimizeCssModules as viteOptimizeCSSModule } from 'vite-plugin-optimize-css-modules'

//Native Node.js modules
import path from 'path'

export default viteConfig({
	appType: 'spa',
	server: {
		host: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
		},
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
					if (/png|jpe?g|webp/i.test(extType)) {
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
		viteImageTools(),
		viteHTMLPlugins({ minify: true }),
		viteWebFont(),
		viteOptimizeCSSModule(),
		viteImageOptimizer({
			test: /\.(webp)$/i,
			webp: {
				quality: 1,
				alphaQuality: 1,
				effort: 6,
				smartSubsample: true,
			},
		}),
		viteImagePresets({
			thumbnail: widthPreset({
				class: 'img thumb',
				loading: 'lazy',
				widths: [30, 80],
				formats: {
					webp: { quality: 10 },
				},
			}),
		}),
	],
})