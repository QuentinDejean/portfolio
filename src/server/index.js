const express = require('express');
const render = require('./middlewares');
const morgan = require('morgan');

const healthController = require('./routes/health');

const app = express();
app.disable('x-powered-by');

app.use(morgan('dev'));

app.use('/health', healthController);

if (process.env.NODE_ENV === 'develop') {
  const config = require('../../webpack.dev.js');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');

  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
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
}

app.use('*', render());

module.exports = app;
