'use strict';

var webpack           = require('webpack'),
    common            = require('./common'),
    WebpackConfig     = require('webpack-config');

module.exports = new WebpackConfig.Config().extend(common.absPath('webpack.base.js')).merge({
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
