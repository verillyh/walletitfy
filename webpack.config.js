const path = require('path')
var HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, "src/view/index.js")
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.png$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ]
    },
    plugins: [new HTMLWebpackPlugin({
        filename: "index.html",
        template: "src/view/login.html"
    })],
    devServer: {
        static: ["./dist"],
        port: 5500,
        watchFiles: ["src/*"]
    },
    ignoreWarnings: [
        {
            module: /node_modules/  
        },
    ],
}