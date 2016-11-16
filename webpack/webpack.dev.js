const path = require('path');
const webpack = require('webpack');

const context = path.resolve(__dirname, '../');

const config = {
  entry: [
    'webpack-hot-middleware/client',
    `${context}/src/client/index.js`
  ],
  output: {
    path: `${context}/src`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
