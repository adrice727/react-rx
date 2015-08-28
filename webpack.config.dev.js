var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    './src/client/entry',
  ],
  output: {
    path: path.join(__dirname,  '/dist/js/'),
    filename: 'app.js',
    publicPath: 'http://localhost:9000/js/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel?stage=0'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader') }
    ]
  }
}
