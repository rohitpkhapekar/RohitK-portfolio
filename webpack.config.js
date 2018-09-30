var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            { test: /\.css$/, use:['style-loader', 'css-loader']},
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.css'],
    },
};






