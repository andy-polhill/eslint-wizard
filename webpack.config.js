const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'src'),
    historyApiFallback: true,
  },
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: [
        /generated/,
        /src/,
      ],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    }],
  },
  output:  {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebPackPlugin([{
      from: '../locales',
      to: 'locales',
    }]),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
    }),
    new webpack.EnvironmentPlugin({
      FIREBASE_API_KEY: 'AIzaSyDieEHOa8VVZgpqjNBHzXIWHanAZM6TJDg',
      MIXPANEL_TOKEN: null,
      NODE_ENV: null,
    }),
  ],
};
