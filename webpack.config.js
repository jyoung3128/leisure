// TODO
/*eslint-env es6*/
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const SRC_DIR = path.resolve(__dirname, 'client', 'src');
const DIST_DIR = path.resolve(__dirname, 'client', 'dist');
const { NODE_ENV = 'production' } = process.env;
const isDev = NODE_ENV.includes('dev');

module.exports = {
  // node: isDev ? 'development' : 'production',
  mode: 'development',
  watch: true,
  entry: {
    app: path.resolve(SRC_DIR, 'index.jsx'),
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react', '@babel/preset-env',
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(SRC_DIR, 'index.html')
    })
  ]
};
