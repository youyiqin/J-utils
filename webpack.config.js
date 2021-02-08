const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[contenthash].bundle.js",
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "swc-loader",
          options: {
            sync: true,
            jsc: {
              parser: {
                syntax: "typescript",
              },
            },
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
