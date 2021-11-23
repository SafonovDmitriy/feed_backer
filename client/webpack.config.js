const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
const isEnvProduction = process.env.NODE_ENV === "production";

module.exports = function (env) {
  return {
    mode: isEnvProduction ? "production" : "development",
    entry: ["@babel/polyfill", "./src/index.jsx"],
    output: {
      path: path.resolve(
        __dirname,
        isEnvProduction ? "dist" : process.env.NODE_ENV
      ),
      filename: "[name].[fullhash].js",
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      // open: true,
    },

    plugins: [
      new HTMLWebpackPlugin({ template: "./public/index.html" }),
      new CleanWebpackPlugin({}),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(dotenv.config().parsed),
      }),
    ],
    resolve: {
      extensions: ["", ".js", ".jsx", "scss"],
    },

    devtool: env.USE_SOURSE_MAP ? "eval-source-map" : false,

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
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },

        {
          test: /\.(jpg|jpeg|png|svg)/,
          use: ["file-loader"],
        },
      ],
    },
  };
};
