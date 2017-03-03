const path = require('path');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// do not show deprecation warning
process.noDeprecation = true;

const appRoot = __dirname + '/src/app';

module.exports = {
    context: appRoot,
    entry: {
        app: ['./index.module.js'],
        vendor: [
            'angular',
            'angular-animate',
            'angular-route',
            'angular-ui-router',
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'assets/js/[hash].bundle.js'
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
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: 'file-loader?name=assets/images/[hash].[ext]'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[hash].[ext]'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[hash].[ext]'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[hash].[ext]'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=assets/fonts/[name].[hash].[ext]'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=assets/fonts/[name].[hash].[ext]'
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: appRoot + '/index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                minifyCSS: true,
                minifyJS: true
            },
        }),

        new ExtractTextPlugin('assets/css/[hash].bundle.css'),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'assets/js/[hash].vendor.js'}),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/public/img',
            to: __dirname + '/dist/img'
        }, {
            from: __dirname + '/src/public/phones',
            to: __dirname + '/dist/phones'
        }])
    ],
    devServer: {
        contentBase: path.join(__dirname, "src/public"),
        compress: true,
        host: "0.0.0.0",
        port: 9000
    }
};