const path = require('path');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
  context: path.resolve(__dirname, '../'),
  entry: path.resolve(__dirname, '../bin/www'),
  externals: [nodeExternals()],
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../src/build'),
    filename: 'lib.node.js'
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
};

module.exports = serverConfig;
