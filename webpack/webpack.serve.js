'use strict';

var common            = require('./common'),
    WebpackConfig     = require('webpack-config'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = new WebpackConfig.Config().extend(common.absPath('webpack.base.js')).merge({
  devtool: "source-map", // creates source-map for bundle, should be used only on dev
  module: {
    loaders: [
      {
        test: /\.(ttf|eot|svg|png|gif|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        query: {
          name: '[hash].[ext]',
          publicPath: 'http://localhost:3003/assets/',
          outputPath: 'assets/'
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3003,
        server: { baseDir: ['builds'] }
    })
  ]
});
