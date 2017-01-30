'use strict';

var webpack = require("webpack"),
    common            = require('./common'),
    WebpackConfig     = require('webpack-config'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = new WebpackConfig.Config().extend(common.absPath('webpack.base.js')).merge({
  devtool: "source-map", // creates source-map for bundle, should be used only on dev
  plugins: [
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3003,
        server: { baseDir: ['builds'] }
    })
  ]
});
