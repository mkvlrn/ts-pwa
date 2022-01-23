import { Configuration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import { join, resolve } from 'path'
import { merge } from 'webpack-merge'

import { rules } from './webpack/webpack.rules'
import { plugins } from './webpack/webpack.plugins'
import { devServer } from './webpack/webpack.dev'

const isDev = process.env.NODE_ENV === 'development'

interface Config extends Configuration {
  devServer?: WebpackDevServerConfiguration
}

const config: Config = {
  mode: `${process.env.NODE_ENV}` as 'development' | 'production',
  entry: join(__dirname, 'src', 'index.tsx'),
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    chunkIds: isDev ? 'named' : 'deterministic',
    mangleExports: isDev ? false : 'deterministic',
    minimize: !isDev,
    moduleIds: isDev ? 'named' : 'deterministic',
    splitChunks: { chunks: 'all' },
  },
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : 'source-map',
  devServer,
}

export default merge(config, rules, plugins)
