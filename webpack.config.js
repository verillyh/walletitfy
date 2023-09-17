const path = require('path')
var HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.png$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [new HTMLWebpackPlugin({
        filename: "index.html",
        template: "src/index.html"
    })],
    devServer: {
        port: 5500,
        watchFiles: ["src/*"]
    },
    ignoreWarnings: [
        {
            module: /node_modules/
        },
    ],
}