
const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports  = {
    mode: "development",
    entry: {
        main:'./src/index.js',
        analitycs:'./src/analitycs.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin()
    ]
}
