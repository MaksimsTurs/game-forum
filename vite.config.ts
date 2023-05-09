//Vite Configuration
import { defineConfig as viteConfig } from 'vite'

//Vite HTML minification
import { createHtmlPlugin as viteHTMLPlugins } from 'vite-plugin-html'

//Vite Image optimization and convertation
import { imagetools as viteImageTools } from 'vite-imagetools'
import { ViteImageOptimizer as viteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteImagePresets, { widthPreset } from 'vite-plugin-image-presets'

//Font optimization
import viteWebFont from 'vite-plugin-webfont-dl'

//CSS Optimization
//@ts-ignore
import { optimizeCssModules as viteOptimizeCSSModule } from 'vite-plugin-optimize-css-modules'

import viteTypesChecker from 'vite-plugin-checker'

//Native Node.js modules
import path from 'path'

export default viteConfig({
	appType: 'spa',
	root: path.resolve(__dirname, "src"),
	server: {
		host: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	build: {
		sourcemap: true,
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
		outDir: path.resolve(__dirname, 'build'),
		reportCompressedSize: false,
		chunkSizeWarningLimit: 250,
		rollupOptions: {
			input: path.resolve(__dirname, 'src/index.html'),
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
		viteTypesChecker({
			enableBuild: true,
			terminal: true,
			typescript: {
				buildMode: true,
				tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
			}
		}),
		viteWebFont(),
		viteHTMLPlugins({ minify: true }),
		viteOptimizeCSSModule(),
		viteImageTools(),
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
					webp: { quality: 1 },
				},
			}),
		}),
	],
})