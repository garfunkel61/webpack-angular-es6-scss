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
        exclude: /node_modules/,
        loaders: ['ng-annotate', 'babel-loader?presets[]=es2015']
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
      },
      {
        test: /\.(ttf|eot|svg|png|gif|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
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
