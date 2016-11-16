/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const config = require('../../../../webpack/webpack.dev.js');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(config);

const webpackMiddleware = () => {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      assets: true,
      colors: true,
      version: true,
      hash: false,
      timings: true,
      chunks: true,
      chunkModules: true
    }
  }));
  app.use(webpackHotMiddleware(compiler));

  return app;
};

module.exports = webpackMiddleware;
