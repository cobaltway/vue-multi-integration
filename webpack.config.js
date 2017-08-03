module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {

                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules(?![\\/]vue-multilanguage[\\/])/
            }
        ]
    }
};
