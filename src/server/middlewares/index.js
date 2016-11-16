const express = require('express');
const webpackMiddleware = require('./webpack/');

const app = express();

const middleware = () => {
  app.use(webpackMiddleware());
  app.use((req, res) => {
    res.status(200).send(`
      <!doctype html>
      <html>
        <header>
          <title>Quentin's Portfolio</title>
        </header>
        <body>
          <div id='app'>This is an app!</div>
          <script src='bundle.js'></script>
        </body>
      </html>
    `);
  });

  return app;
};

module.exports = middleware;
