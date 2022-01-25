/* eslint-disable import/no-extraneous-dependencies */

import { Configuration } from 'webpack'

export const rules: Configuration = {
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
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
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
}
