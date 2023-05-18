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
import { optimizeCssModules as viteOptimizeCSSModule } from 'vite-plugin-optimize-css-modules'

//Native Node.js modules
import path from 'node:path'

export default viteConfig(({ mode }) => {
	const plugins =
		mode === 'production'
			? [
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
			  ]
			: []

	return {
		appType: 'spa',
		root: path.resolve(__dirname, 'src'),
		server: {
			host: true,
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		build: {
			minify: 'terser',
			emptyOutDir: true,
			sourcemap: true,
			manifest: true,
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
					manualChunks: {
						'react-vendor': ['react', 'react-dom/client', 'react-dom', 'react-router-dom'],
						'redux-vendor': ['@reduxjs/toolkit', 'react-redux', 'redux'],
						'Loader': [ path.resolve(__dirname, 'src/pages/ui/Loader/Loader.tsx') ]
					},
					assetFileNames: (assetInfo: { name: any }) => {
						let extType = assetInfo.name!.split('.').at(1)
						
						if (/webp/i.test(extType)) {
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
		plugins,
	}
})
