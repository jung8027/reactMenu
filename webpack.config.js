var webpack = require('webpack'),
    path = require('path');
 
var srcPath  = path.join(__dirname, '/client'),
    distPath = path.join(__dirname, '/client/public');

module.exports = {
  entry: srcPath,
  output: {
    path: distPath,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"]
  }
};
