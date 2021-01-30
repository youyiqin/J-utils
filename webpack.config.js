/* eslint-disable */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [{
      test: /.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'swc-loader',
        options: {
          // disable type checker - we will use it in fork plugin
          // transpileOnly: true
          sync: true,
        },
      },
    }],
  },
};
