/* eslint-disable import/no-extraneous-dependencies */

import { Configuration, WebpackPluginInstance } from 'webpack'
import { resolve } from 'path'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlReplacePlugin from 'html-replace-webpack-plugin'
import HtmlPlugin from 'html-webpack-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { GenerateSW } from 'workbox-webpack-plugin'

import manifest from '../src/assets/manifest.json'

const isDev = process.env.NODE_ENV === 'development'

const htmlPlugin = new HtmlPlugin({
  template: resolve(__dirname, '..', 'src', 'index.html'),
  filename: 'index.html',
  minify: !isDev,
})

const htmlReplacePlugin = new HtmlReplacePlugin([
  {
    pattern: '__TITLE__',
    replacement: manifest.name,
  },
  {
    pattern: '__DESCRIPTION__',
    replacement: manifest.description,
  },
]) as WebpackPluginInstance // workaround for error with this plugin, missing properties

const copyPlugin = new CopyPlugin({
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
})

const refreshPlugin = new ReactRefreshPlugin()

const workboxPlugin = new GenerateSW({
  clientsClaim: true,
  skipWaiting: true,
})

const conditionalPlugins = isDev ? [refreshPlugin] : [workboxPlugin]

export const plugins: Configuration = {
  resolve: {
    plugins: [new TsconfigPathsPlugin({ extensions: ['.ts', '.tsx', '.json'] })],
  },
  plugins: [htmlPlugin, htmlReplacePlugin, copyPlugin, ...conditionalPlugins],
}
