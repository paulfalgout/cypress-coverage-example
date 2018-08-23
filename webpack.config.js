const babelLoader = {
  test: /\.js?$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
};

module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [babelLoader]
  }
};