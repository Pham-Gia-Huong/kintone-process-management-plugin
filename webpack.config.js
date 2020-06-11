const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  return {
    entry: {
      config: './src/configBuild/js/config.js',
      index: path.resolve('src/plugin/index.tsx'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve('build/js'),
    },
    watch: env.production === 'true' ? false : true,
    module: {
      rules: [
        {
          test: /\.(tsx|js|ts)$/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: './src/configBuild/css',
          to: path.resolve('build/css'),
        },
        {
          from: './src/configBuild/html',
          to: path.resolve('build/html'),
        },
        {
          from: './src/configBuild/image',
          to: path.resolve('build/image'),
        },
        {
          from: './src/configBuild/manifest.json',
          to: path.resolve('build'),
        },
      ]),
    ],
  };
};
