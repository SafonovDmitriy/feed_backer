const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
const isEnvProduction = process.env.NODE_ENV === "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = (algorithm) =>
  crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

module.exports = function (env) {
  return {
    mode: isEnvProduction ? "production" : "development",
    entry: ["@babel/polyfill", "./src/index.jsx"],
    output: {
      path: path.resolve(
        __dirname,
        isEnvProduction ? "dist" : process.env.NODE_ENV
      ),
      filename: "[name].[hash].js",
      chunkFilename: "[name].[chunkhash].chunk.js",
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      // open: true,
    },

    plugins: [
      new HTMLWebpackPlugin({ template: "./public/index.html" }),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(dotenv.config().parsed),
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx", ".css", ".scss"],
    },

    devtool: env.USE_SOURSE_MAP ? "inline-source-map" : false,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 5000,
        maxSize: 10000,
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /(node_modules)/,

          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            },
          },
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,

          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.(s[ac]ss|css)$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpg|jpeg|png|svg)/,
          use: ["file-loader"],
        },
      ],
    },
  };
};
