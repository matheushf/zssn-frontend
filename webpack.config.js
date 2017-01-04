var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        modulesDirectories: ["web_modules", "node_modules", "bower_components"]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ],
    entry: path.resolve(__dirname, 'src/app.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                //JS LOADER
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel'
            }, {
                //HTML LOADER
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    devServer: {
        contentBase: "./src"
    }
};