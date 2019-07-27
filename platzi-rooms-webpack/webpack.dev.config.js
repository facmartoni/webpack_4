const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/main.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "http://localhost:9000/",
    chunkFilename: "js/[id].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
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
        test: /\.css|postcss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  devServer: {
    port: 9000,
    hot: true,
    contentBase: path.resolve(__dirname, "dist")
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ]
};
