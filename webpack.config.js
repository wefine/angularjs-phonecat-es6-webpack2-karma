const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// do not show deprecation warning
process.noDeprecation = true;

const appRoot = __dirname + '/src/app';

module.exports = {
    context: appRoot,
    entry: {
        app: ['./index.module.js']
    },
    output: {
        path: appRoot,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract(["css-loader"]),
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: appRoot + '/index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new ExtractTextPlugin('[hash].bundle.css'),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: '[hash].vendor.js'}),
    ],
    devServer: {
        contentBase: path.join(__dirname, "app"),
        compress: true,
        host: "0.0.0.0",
        port: 9000
    }
};