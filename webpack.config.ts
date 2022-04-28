import { Configuration, WebpackPluginInstance } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import { GenerateSW } from 'workbox-webpack-plugin'
import { join } from 'path'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlPlugin from 'html-webpack-plugin'
import HtmlReplacePlugin from 'html-replace-webpack-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

import manifest from './src/assets/manifest.json'

const isDev = process.env.NODE_ENV === 'development'

interface WebpackConfiguration extends Configuration {
  devServer?: WebpackDevServerConfiguration
}

const config: WebpackConfiguration = {
  mode: `${process.env.NODE_ENV}` as 'development' | 'production',
  entry: join(__dirname, 'src', 'index.tsx'),
  output: {
    path: join(__dirname, 'build'),
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ extensions: ['.ts', '.tsx', '.json'] })],
  },
  optimization: {
    chunkIds: isDev ? 'named' : 'deterministic',
    mangleExports: isDev ? false : 'deterministic',
    minimize: !isDev,
    moduleIds: isDev ? 'named' : 'deterministic',
    splitChunks: { chunks: 'all' },
  },
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: undefined },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/inline',
        generator: {
          filename: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      minify: !isDev,
    }),
    new HtmlReplacePlugin([
      {
        pattern: '__TITLE__',
        replacement: manifest.name,
      },
      {
        pattern: '__DESCRIPTION__',
        replacement: manifest.description,
      },
    ]) as WebpackPluginInstance, // workaround for error with this plugin, missing properties
    new CopyPlugin({
      patterns: [
        {
          from: join(__dirname, 'src', 'assets'),
          to: 'assets',
          filter: (file) => !file.endsWith('.json'),
        },
        {
          from: join(__dirname, 'src', 'assets', 'manifest.json'),
          to: 'assets/site.webmanifest',
        },
      ],
    }),
    ...(isDev
      ? [new ReactRefreshPlugin()]
      : [
          new GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
          }),
        ]),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
    hot: true,
    port: 1337,
  },
}

export default config
