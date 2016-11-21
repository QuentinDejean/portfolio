const express = require('express');
const render = require('./middlewares');
const morgan = require('morgan');

const healthController = require('./routes/health');

const app = express();
app.disable('x-powered-by');

app.use(morgan('dev'));

app.use('/health', healthController);

if (process.env.NODE_ENV === 'develop') {
  const clientConfig = require('../../webpack.dev.js');
  const serverConfig = require('../../webpack.server.js');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack([clientConfig, serverConfig]);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: clientConfig.output.publicPath,
    stats: {
      assets: true,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.use('*', render());

module.exports = app;
