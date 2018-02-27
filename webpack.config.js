const path = require("path");
const outputDir = path.join(__dirname, "build/");
const webpack = require("webpack");

module.exports = {
  entry: {
    public: "./src/index.js",
    private: "./src/private.js"
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      minChunks: 2,
      chunks: "all"
    }
  },
  output: {
    path: outputDir,
    publicPath: outputDir,
    filename: "[name].js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: ["@babel/preset-env"],
            plugins: ["transform-react-jsx"]
          }
        }
      }
    ]
  }
};
