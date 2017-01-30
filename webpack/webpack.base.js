'use strict';

var common            = require('./common'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/app/app.js'
  },
  output: {
    path: 'builds',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // below annotation for angular dependencies injections
        loaders: ['ng-annotate', 'babel-loader?presets[]=es2015'],
        exclude: /node_modules/
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
      new HtmlWebpackPlugin({ // Inject builded out bundle to given file
          title: 'My fist Angular Webpack App',
          template: 'src/index.html',
          hash: true
      })
  ]
}
