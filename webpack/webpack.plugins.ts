/* eslint-disable import/no-extraneous-dependencies */

import { Configuration, WebpackPluginInstance } from 'webpack'
import { resolve } from 'path'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import HtmlReplaceWebpackPlugin from 'html-replace-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import TsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin'
import WorkboxWebpackPlugin from 'workbox-webpack-plugin'

import manifest from '../src/assets/manifest.json'

const isDev = process.env.NODE_ENV === 'development'

export const plugins: Configuration = {
  resolve: {
    plugins: [new TsconfigPathsWebpackPlugin({ extensions: ['.ts', '.tsx', '.json'] })],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'src', 'index.html'),
      filename: 'index.html',
      minify: !isDev,
    }),
    new HtmlReplaceWebpackPlugin([
      {
        pattern: '__TITLE__',
        replacement: manifest.name,
      },
      {
        pattern: '__DESCRIPTION__',
        replacement: manifest.description,
      },
    ]) as WebpackPluginInstance, // workaround for error with this plugin, missing properties
    new FaviconsWebpackPlugin({
      logo: resolve(__dirname, '..', 'src', 'assets', 'logo.png'),
      cache: true,
      publicPath: './',
      prefix: 'webapp/',
      inject: true,
      manifest: resolve(__dirname, '..', 'src', 'assets', 'manifest.json'),
      favicons: {
        icons: {
          appleStartup: false,
          coast: false,
          firefox: false,
          windows: false,
          yandex: false,
        },
      },
    }),
    ...(isDev ? [new ReactRefreshWebpackPlugin()] : []),
    ...(isDev
      ? []
      : [
          new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
          }),
        ]),
  ],
}
