const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


module.exports = {
    mode: 'development',
    devtool: 'eval-nosources-cheap-module-source-map',
    devServer: {
        hot: true,
        open: true
      },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin ({
            'process.env.name': JSON.stringify('Dev lapa')
        })
    ]
}