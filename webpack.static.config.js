const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/static.js',
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: [
        /src/,
        /generated/,
      ],
    }, {
      test: /\.ejs$/,
      use: ['ejs-loader'],
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true,
          },
        }, {
          loader: 'postcss-loader',
        }],
      }),
    }],
  },
  output: {
    filename: 'assets/bundle.[chunkhash].min.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin('public'),
    new ExtractTextPlugin({
      filename: 'assets/bundle.[contenthash].min.css',
    }),
    new CopyWebpackPlugin([{
      from: './src/assets',
      to: './assets',
    }, {
      from: './locales',
      to: './locales',
    }]),
    new webpack.EnvironmentPlugin({
      MIXPANEL_TOKEN: null,
      NODE_ENV: null,
    }),
    new StaticSiteGeneratorPlugin({
      paths: ['/', '/404'],
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({
      asset: '[path]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.svg$/,
    }),
  ],
};
