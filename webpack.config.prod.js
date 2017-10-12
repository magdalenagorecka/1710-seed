import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';


export default {
  entry: [
    path.resolve(__dirname, 'src/index')
  ],

  output: {
    devtoolLineToLine: true,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?-autoprefixer']
        })
        
      }
    ]
  },

  devtool: 'source-map',

  target: 'web',

  stats: 'errors-only',

  plugins: [
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
    new ExtractTextPlugin("index.css"),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
          postcss: [autoprefixer]
      }
    })  
    
  ]
}