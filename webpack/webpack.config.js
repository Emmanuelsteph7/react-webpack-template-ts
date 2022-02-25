const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  // resolve makes it possible to import a component without the extension.
  // import Home from "./Home"
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // checks for tsx first, then ts, then js
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/, // searches for .ts, .tsx, .js, .jsx files
        exclude: /node_modules/, // exclude node_modules
        use: [{ loader: "babel-loader" }], // webpack should use babel-loader for all the specified files
      },
      {
        test: /\.css$/, // searches for .css files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i, // searches for the listed files
        type: "asset/resource", // uses the asset module to handle them instead of imorting file-loader package
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  mode: "development", // this sets process.env.NODE_ENV = development
  plugins: [
    //   this injects the bundle.js file into the html file and place it in the build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
};
