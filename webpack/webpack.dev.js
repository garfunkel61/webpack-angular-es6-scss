'use strict';

var common            = require('./common'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/app/app.js'
  },
  output: {
    path: 'builds',
    filename: '[name].bundle.js'
  },
  devtool: "source-map", // creates source-map for bundle, should be used only on dev
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
      new BrowserSyncPlugin({
          host: 'localhost',
          port: 3003,
          server: { baseDir: ['builds'] }
      }),
      new HtmlWebpackPlugin({ // Inject builded out bundle to given file
          title: 'My fist Angular Webpack App',
          template: 'src/index.html',
          hash: true
      })
  ]
}
