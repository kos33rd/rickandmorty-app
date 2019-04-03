const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const buildStubServer = require('./stub/server');

const outputDirectory = path.join(__dirname, 'dist');

const port = process.env.PORT || 9000;

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: outputDirectory,
        publicPath: '/',
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    }
                ]
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new webpack.DefinePlugin({
            BACKEND_URL: `"${process.env.BACKEND_URL}"`
        }),
        new HtmlWebpackPlugin({
            title: "My App",
            hash: true,
            template: "stub/index.html"
        })
    ],
    devServer: {
        contentBase: outputDirectory,
        compress: true,
        port: port,
        historyApiFallback: true,
        before: buildStubServer
    }
};
