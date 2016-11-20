const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src/client/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules'
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

module.exports = config;
