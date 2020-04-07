const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', ".css", ".json", ".html"]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "bundle.umd.js",
    library: ["location-api"],
    libraryTarget: "umd"
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: [ 'file-loader', 'image-webpack-loader' ]
      }
    ]
  },
}