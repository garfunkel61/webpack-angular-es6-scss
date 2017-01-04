'use strict';

var common = require('./common');

module.exports = {
  entry: {
    'app': './src/index.' + common.mode + '.js'
  },
  output: {
    path: 'builds',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
