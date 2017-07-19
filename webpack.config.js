
'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './browser/js/app.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      }
    ]
  }
};
