module.exports = {
    entry: [
        // './src/index.tsx'
        './src/main.tsx'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }, {
            test: require.resolve("react"),
            loader: "expose?React"
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    devtool: 'source-map'
};
