import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
   },

  output: {
    devtoolLineToLine: true,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
    
  },

  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
      },

      {
        test: /\.css$/, 
        use:[
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ]
      }
    ]
  },

  devtool: 'source-map',

  target: 'web',

  stats: 'errors-only',

  plugins: [
    new webpack.LoaderOptionsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify:{
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash:true,
        minifyJS:true,
        minifyCSS:true,
        minifyURLs:true
      },
      inject: true
    }),
    //Eliminate duplicats
    new webpack.optimize.DedupePlugin(),  
    //Minify JS
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    
  ]
}