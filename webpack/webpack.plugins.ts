/* eslint-disable import/no-extraneous-dependencies */

import { Configuration, WebpackPluginInstance } from 'webpack'
import { resolve } from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlReplaceWebpackPlugin from 'html-replace-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import TsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin'
import { GenerateSW } from 'workbox-webpack-plugin'

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
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, '..', 'src', 'assets'),
          to: 'assets',
          filter: (file) => !file.endsWith('.json'),
        },
        {
          from: resolve(__dirname, '..', 'src', 'assets', 'manifest.json'),
          to: 'assets/site.webmanifest',
        },
      ],
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
    ...(isDev ? [new ReactRefreshWebpackPlugin()] : []),
    ...(isDev
      ? []
      : [
          new GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
          }),
        ]),
  ],
}
