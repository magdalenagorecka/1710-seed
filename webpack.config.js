import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        debug: true,
        noInfo: false,
      })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader'
      },
      {
        test: /\.css$/, 
        use:[
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
}