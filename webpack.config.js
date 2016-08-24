/* this config file has been written following the suggestions of
https://tylermcginnis.com/react-js-tutorial-1-5-utilizing-webpack-and-babel-to-build-a-react-js-app-5f804d729d3b#.5f5by5lry
*/

/* create a new instance of HTMLWebpackPlugin and tell it to create an
 * index.html based on ./app/index.html every time webpack is run; and inject
 * the source code trans'd by webpack into the body of this index.html.
 * this index.html will be placed in the output path by default.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

// webpack.config.js exports the object module.exports.
// module.exports represents the configs for webpack
module.exports = {
  entry: [ './app/index.js' ], // entrypoint for app
  module: {
    loaders: [
      // run babel-loader transformation on all paths matching test regex in
      // the include directory
      {
        test: /\.js$/, // files ending in .js
        include: __dirname + '/app', // in ./app
        loader: "babel-loader"
      }
    ]
},
  output: {
    // output bundled source code as index_bundle.js in ./dist
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [ HTMLWebpackPluginConfig ]
}
