const express = require('express');
const middleware = require('./middlewares');
const morgan = require('morgan');

const healthController = require('./routes/health');

const app = express();
app.disable('x-powered-by');

app.use(express.static(`${__dirname}/../`, {
  maxAge: 604800000
}));

app.use(morgan('dev'));

app.use('/health', healthController);

app.use('*', middleware());

module.exports = app;
