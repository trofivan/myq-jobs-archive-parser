const path = require('path');
const fs = require('fs');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, './src/theme.less'), 'utf8')
);

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  target: 'node-webkit',
  mode: process.env.NODE_ENV || 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      exclude: ['index.html', '.keep', 'assets']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: [
              'transform-object-rest-spread',
              ['import', { libraryName: 'antd', style: true }]
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: themeVariables
            }
          }
        ]
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }
    ]
  }
};
