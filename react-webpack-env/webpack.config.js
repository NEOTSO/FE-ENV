const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        port: 3030,
        disableHostCheck: true,
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.(woff2|svg|woff|ttf|eot)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 8192
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg|mp4)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            template: 'src/index.html',
            // meta: { viewport: 'width=device-width, initial-scale=1, user-scalable=no' }
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devtool: 'source-map'
}