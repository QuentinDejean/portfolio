const express = require('express');
const morgan = require('morgan');

const healthController = require('./routes/health');

const app = express();
app.disable('x-powered-by');

app.use(express.static(`${__dirname}/../client/assets`, {
  maxAge: 604800000
}));

app.use(morgan('dev'));

app.use('/health', healthController);

module.exports = app;
