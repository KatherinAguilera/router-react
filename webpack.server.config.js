const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = (env) => {
  const plugins = [
    // quitar hash
    new ExtractTextPlugin("css/[name].css")
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {

    entry: {
      "app": path.resolve(__dirname, 'src/pages/containers/app'),
      // "redux": path.resolve(__dirname, 'src/entries/redux.js'),

    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      // js por ssr y quitar hash
      filename: 'ssr/[name].js',
      // publicPath: path.resolve(__dirname, 'dist')+"/",
      // Quitar .3
      publicPath: "/",
      chunkFilename: 'js/[id].[chunkhash].js',
      // agregar 2
      libraryTarget: 'commonjs2',
    },
    devServer: {
      port: 9000,
    },
    // agregar 1
    target: 'node',
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            }
          },
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                }
              }
            ]
          })
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit:  1000000,
              fallback: 'file-loader',
              name: 'images/[name].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}