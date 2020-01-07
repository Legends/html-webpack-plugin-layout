const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      { test: /\.ejs$/, loader: 'ejs-loader' },
      { test: /\.png/, loader: 'file-loader' }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/layout.js",
      templateParameters: {
        'title': 'Index',
        'page': 'home',
        options: {
          title: "Mau"
        },
      },

      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: "src/layout.js",
      templateParameters: {
        options: {
          title: "Pfau"
        },
        'title': 'About',
        page: 'about'
      },
      filename: 'about.html'
    }),
  ]
};
