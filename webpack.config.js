const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: ["./application/src/index.tsx"],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
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
        test: /\.tsx?$/,
        loader: 'ts-loader'
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