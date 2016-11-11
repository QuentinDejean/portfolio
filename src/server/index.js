const express = require('express');
const morgan = require('morgan');

const app = express();
app.disable('x-powered-by');

app.use(morgan('dev'));


export default express;
