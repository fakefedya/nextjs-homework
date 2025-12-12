import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	turbopack: {
		rules: {
			'*.svg': {
				loaders: [
					{
						loader: '@svgr/webpack',
						options: {
							icon: true,
							svgo: true,
							// Важно: currentColor позволяет красить через CSS (color / text-*)
							svgoConfig: {
								plugins: [
									{
										name: 'preset-default',
										params: {
											overrides: {
												// не удаляем viewBox, иначе масштабирование ломается
												removeViewBox: false,
											},
										},
									},
								],
							},
						},
					},
				],
				as: '*.js',
			},
		},
	},
}

export default nextConfig
