const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./src/index.ts",
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash:8].bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx}'
      }
    })
  ],
  module: {
    rules: [{
      test: /.ts$/,
      exclude: /node_modules/,
      use: {
        loader: "swc-loader",
        options: {
          // disable type checker - we will use it in fork plugin
          // transpileOnly: true
          sync: true,
          jsc: {
            parser: {
              syntax: "typescript"
            }
          }
        }
      }
    }]
  }
}