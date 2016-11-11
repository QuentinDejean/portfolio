const express = require('express');
const morgan = require('morgan');

const app = express();
app.disable('x-powered-by');

app.use(express.static(`${__dirname}/../client/assets`, {
  maxAge: 604800000
}));

app.use(morgan('dev'));


export default express;
