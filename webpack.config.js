const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

// TODO figure out better CleanWebpackPlugin configuration

const baseConfig = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: [".ts", ".js"],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src'),
        ]
    },

    output: {
        filename: '[name].bundle.js'
    }
};

const clientConfig = merge(baseConfig, {
    entry: {
        client: './src/client.ts' 
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: []
        }),
        new HtmlWebpackPlugin({
            title: 'Hello, Client!',
            filename: 'index.html',
            chunks: ['client']
        }),
    ],

    output: {
        path: path.resolve(__dirname, 'dist', 'static'),
    },

    target: 'web'
});

const serverConfig = merge(baseConfig, {
    entry: {
        server: './src/server.ts' 
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: []
        }),
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
    },

    target: 'node',
});

module.exports = [serverConfig, clientConfig];
