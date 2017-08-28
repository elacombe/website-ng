module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: '0.0.0.0',
    port: 3007,
    proxy: {
      '/server/index.html': {
        target: 'http://0.0.0.0:5555 ',
        secure: false,
      }
    }
  },
}

