const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
    filename: 'index.html',
    inject: 'body'
});

const extractSass = new ExtractTextPlugin({
    filename: "bundle.css",
    disable: process.env.NODE_ENV === "development"
});


const webpackConfig = {
    entry: path.resolve(__dirname, './public/index.jsx'),
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.jsx$/, use: ['babel-loader'], exclude: /node_modules/ },
            // { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            // {
            //     test: /\.scss$/,
            //     loader: extractSass.extract({
            //         loaders: [{
            //                     loader: "style-loader"
            //                 }, {
            //                     loader: "css-loader"
            //                 }, {
            //                     loader: "sass-loader"
            //                 }
            //         ]
            //         // use style-loader in development
            //         // fallback: "style-loader"
            //     })
            // }
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',

            //         // Could also be write as follow:
            //         // use: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 query: {
            //                     modules: true,
            //                     localIdentName: '[name]__[local]___[hash:base64:5]'
            //                 }
            //             },
            //             'postcss-loader'
            //         ]
            //     }),
            // },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    //fallback: 'style-loader',

                    // Could also be write as follow:
                    // use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
                    use: [
                        {
                            loader: 'css-loader',
                            // query: {
                            //     modules: true,
                            //     sourceMap: true,
                            //     importLoaders: 2,
                            //     localIdentName: '[name]__[local]___[hash:base64:5]'
                            // }
                        },
                        'sass-loader'
                    ]
                }),
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
                use: ['file-loader?name=font/[name].[ext]']
            },
            {
                test: /\.(svg|png)$/,
                use: ['file-loader?name=images/[name].[ext]']
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig, extractSass],
    devtool: true
};

module.exports = webpackConfig;