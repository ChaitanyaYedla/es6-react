module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './bin/bundle.js'
  },
  module: { loaders: [
    {
     test: /.js?$/,
     loader: 'babel-loader',
     exclude: /node_modules/,
     query: {
       presets: ['es2015','react']
     }
   }
  ]
  }
};
