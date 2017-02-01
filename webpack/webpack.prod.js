'use strict';

var webpack           = require('webpack'),
    common            = require('./common'),
    WebpackConfig     = require('webpack-config');

module.exports = new WebpackConfig.Config().extend(common.absPath('webpack.base.js')).merge({
  module: {
    loaders: [
      {
        test: /\.(ttf|eot|svg|png|gif|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        query: {
          name: '[hash].[ext]',
          publicPath: 'http://prod-url.com/assets/',
          outputPath: 'assets/'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      warning: false,
      mangle: true,
      comments: false,
      compress: {
          warnings: false
      }
    })
  ]
});
