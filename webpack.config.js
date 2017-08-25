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
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['react', 'react-hmre']} },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
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
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: 'url-loader?name=/public/dist/font/[name].[ext]'
            },
        ]
    },
    plugins: [HtmlWebpackPluginConfig, extractSass]
};

module.exports = webpackConfig;