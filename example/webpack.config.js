const path = require('path');

module.exports = {
  entry: './example/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.html', '.json']
  },
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/build/',
    filename: "example.js",
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.json', '.css', '.html'],
    alias: {
      'GenerateMap': path.resolve(__dirname, '..', 'src', 'index') // FIXME: doesn't work
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
}
