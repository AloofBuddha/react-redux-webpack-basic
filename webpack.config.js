module.exports = {
  // the entry to our program for bundling
  entry: './main.js',
  // the output of bundling, for index.html to reference
  output: {
    path: './',
    filename: 'bundle.js'
  },
  // dev-server serves on port 3030. Inline allows for hot-reloading.
  devServer: {
    inline: true,
    port: 3030
  },
  module: {
    loaders: [
      {
        // accepts .js and .jsx
        test: /\.jsx?$/,
        // ignores node_modules
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          // transformations for es6 and react jsx.
          presets: ['es2015', 'react'],
          // additional 'spread' and 'rest' functionality
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  },
}