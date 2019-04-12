const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { spawn } = require("child_process");

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = path.join(__dirname, "../../src");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: "file-loader?name=img/[name]__[hash:base64:5].[ext]" }],
        include: defaultInclude
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.(svg)$/,
        exclude: /fonts/ /* dont want svg fonts from fonts folder to be included */,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              noquotes: true
            }
          }
        ]
      }
    ]
  },
  target: "electron-renderer",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  devtool: "cheap-source-map",
  devServer: {
    contentBase: path.join(__dirname, "../../dist"),
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    before() {
      spawn("electron", ["."], {
        shell: true,
        env: process.env,
        stdio: "inherit"
      })
        .on("close", code => process.exit(0))
        .on("error", spawnError => console.error(spawnError));
    }
  }
};
