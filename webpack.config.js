const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./application/src/index.tsx'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css'],
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },
  output: {
    path: path.join(__dirname, '/application/dist'),
    publicPath: '/',
    filename: 'bundle.min.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/application/src'),
    compress: true,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './application/public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
