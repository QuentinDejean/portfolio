const express = require('express');

const app = express();

const renderMiddleware = () => {
  app.use((req, res) => {
    res.status(200).send(`
      <!doctype html>
      <html>
        <header>
          <title>Quentin's Portfolio</title>
        </header>
        <body>
          <div id='app'></div>
          <script src='bundle.js'></script>
        </body>
      </html>
    `);
  });

  return app;
};

module.exports = renderMiddleware;
