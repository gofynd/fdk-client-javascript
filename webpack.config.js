const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    application: './application.js',
  },
  mode: "production",
  target: "web",
  output: {
    clean: true,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: "window"
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')]
    }),
  ],
};