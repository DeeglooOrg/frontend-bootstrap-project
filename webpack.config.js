const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ["./application/src/index.tsx"],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"]
  },
  output: {
    path: path.join(__dirname, '/application/dist'),
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
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
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