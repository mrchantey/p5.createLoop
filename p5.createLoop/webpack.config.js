module.exports = {

    mode: "development",
    devServer: {
        contentBase: './dist'
    },
    externals: {
        p5: 'p5'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            }
        ]
    }
}