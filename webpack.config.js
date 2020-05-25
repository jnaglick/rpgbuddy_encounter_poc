const path = require('path');

module.exports = {
    entry: { 
        server: './src/server.js' 
    },

    target: 'node',
    
    resolve: {
        modules: [
            path.resolve('./src'),
        ]
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};