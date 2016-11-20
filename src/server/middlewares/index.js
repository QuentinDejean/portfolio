const express = require('express');
const renderToString = require('react-dom/server');

const app = express();

const renderMiddleware = () => {
  app.use((req, res) => {
    const Main = require('../bundle.server.js');
    res.status(200).send(`
      <!doctype html>
      <html>
        <header>
          <title>Quentin's Portfolio</title>
        </header>
        <body>
          <div id='app'>${renderToString(Main)}</div>
          <script src='bundle.js'></script>
        </body>
      </html>
    `);
  });

  return app;
};

module.exports = renderMiddleware;
