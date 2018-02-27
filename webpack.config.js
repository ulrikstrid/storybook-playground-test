const path = require("path");
const outputDir = path.join(__dirname, "build/");
const ManifestPlugin = require("webpack-assets-manifest");

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
    filename: "[name].[hash].js"
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
            plugins: ["transform-react-jsx"]
          }
        }
      }
    ]
  },
  plugins: [new ManifestPlugin()]
};
