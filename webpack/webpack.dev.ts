/* eslint-disable import/no-extraneous-dependencies */

import { Configuration } from 'webpack-dev-server'

export const devServer: Configuration = {
  open: true,
  historyApiFallback: true,
  hot: true,
  port: 1337,
}
