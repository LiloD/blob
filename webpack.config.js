var path = require('path')

module.exports = {
    entry: {
        main: './index.js' 
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    watch: true,

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/, 
            loader: "babel-loader" 
        }]
    }
}