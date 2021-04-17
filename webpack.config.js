const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

console.log(__dirname);

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    port: 3000,
    publicPath: "/dist/",
    hot: true,
  },
  devtool: "eval-source-map",
  entry: "./src/app.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      { test: /\.m?jsx?$/, use: "babel-loader", exclude: /node_modules/ },
    ],
  },
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "boilerplate.bundle.js",
    clean: true,
    publicPath: "/dist/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "public", "index.html"),
      inject: "body",
      template: path.join(__dirname, "template.html"),
      title: "boilerplate",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      buffer: false,
      util: false,
      "crypto-browserify": require.resolve("crypto-browserify"),
    },
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "server"),
      path.resolve(__dirname, "public"),
      path.resolve(__dirname),
    ],
  },
};
