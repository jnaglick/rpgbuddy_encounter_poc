const path = require('path');

module.exports = {
    entry: { 
        server: './src/server.js' 
    },

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
            path.resolve('./src'),
        ]
    },

    target: 'node',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};
