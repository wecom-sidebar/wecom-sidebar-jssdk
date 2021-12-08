const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: "./lib/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin()],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  target: ["web", "es5"],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
