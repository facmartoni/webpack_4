const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "http://localhost:8000/",
    chunkFilename: "js/[id].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "file-loader"
          // options: {
          //   outputPath: path.resolve(__dirname, "assets")
          // }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 8000,
    hot: true,
    contentBase: path.resolve(__dirname, "dist")
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ]
};
