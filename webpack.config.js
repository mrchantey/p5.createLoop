const path = require('path')
module.exports = {

	mode: "development",
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		// compress: true,
		port: 9000,
	},
	externals: {
		p5: 'p5'
	},
	module: {
		rules: [
			{
				// test: /\.js$/,
				// use: ['source-map-loader'],
				// enforce: 'pre'
			}
		]
	}
}