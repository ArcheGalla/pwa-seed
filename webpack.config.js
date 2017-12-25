const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
		entry: {
				vendor: ['react', 'react-dom'],
				index: './src/app/App.js'
		},
		output: {
				path: path.resolve(__dirname, "build"),
				filename: '[name].bundle.js',
				// publicPath: "/assets/",
		},

		module: {
				rules: [],
		},

		resolve: {
				modules: ["node_modules", path.resolve(__dirname, "app")],
				extensions: [".js", ".json", ".jsx", ".css"],
				alias: {},
		},

		performance: {
				hints: "warning",
				maxAssetSize: 200000,
				maxEntrypointSize: 400000,
				assetFilter: (assetFilename) => assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
		},

		devtool: "source-map",
		context: __dirname,
		target: "web",
		// externals: ["react", /^@angular\//],
		// Don't follow/bundle these modules, but request them at runtime from the environment
		stats: "errors-only",
		devServer: {
				// contentBase: path.join(__dirname, 'public'),
				historyApiFallback: true, // true for index.html upon 404, object for multiple paths
				hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
				https: false, // true for self-signed, object for cert authority
				noInfo: true, // only errors & warns on hot reload
		},

		plugins: [
				new HtmlWebpackPlugin({
						template: 'src/index.html',
						title: 'awesome pwa'
				}),
				new webpack.HotModuleReplacementPlugin({
						// Options...
				}),
				new webpack.optimize.CommonsChunkPlugin({
						name: 'vendor',
				})
		],
};