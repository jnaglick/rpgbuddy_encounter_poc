const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: { 
        server: './src/server.ts' 
    },

    plugins: [
        new CleanWebpackPlugin()
    ],

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

    target: 'node',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};
