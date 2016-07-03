
const webpack = require('webpack')

const config = {
  entry: './demo/entry.js',
  output: {
    path: __dirname + '/demo',
    filename: 'bundle.js'
  },
  module: {
    resolve: {
      alias: {
        h: './src/rcxs'
      }
    },
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      h: '../src/rcxs'
    })
  ],
  devServer: {
    contentBase: 'demo'
  }
}

module.exports = config

