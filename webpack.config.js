
const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports  = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: {
        main:'./index.js',
        analitycs:'./analitycs.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {test: /\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            {test: /\.(jpg|png|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {test: /\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {test: /\.(csv)$/,
                loader: 'csv-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            }
        ]
    }
}
