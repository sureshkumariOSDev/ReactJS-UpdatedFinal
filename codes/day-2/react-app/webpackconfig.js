const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const createConfig = () => {
    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.app.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.(css|scss)$/,
                    use: ["css-loader", "style-loader"]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
                },
                {
                    test: /\.html$/,
                    use: "html-loader"
                },
                {
                    test: /\.(png|jpg)$/,
                    use: "file-loader"
                }
            ]
        },
        devServer: {
            contentBase: './dist',
            port: 4000
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
            }),
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: true
            })
        ],
        devtool: 'inline-source-map'
    }
}

module.exports = { createConfig };