import path from 'path'
import * as webpack from 'webpack'
import LicensePack from 'license-info-webpack-plugin'

const webpackConfig: webpack.Configuration = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: process.env.NODE_ENV !== 'production' ? 'inline-source-map' : undefined,
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname),
    filename: './dist/index.js',
    library: 'KyushuHaikunator',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    ...process.env.NODE_ENV === 'production' ? [ new LicensePack({ glob: '{LICENSE,license,License}*' }) ] : []
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
}

export default webpackConfig
