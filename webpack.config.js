var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      }, {
        test: /\.css/,
        loaders: [
          'style',
          'css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]',
          'postcss',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
