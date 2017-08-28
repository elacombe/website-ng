const path = require('path');
const publicPath = path.join(__dirname, '../public');
const buildPath = path.join(__dirname, '../build');
const staticPath = path.join(buildPath, './static');

module.exports = {
  justSSR: false,
  compress: true,
  publicPath,
  buildPath,
  staticPath,
  bundle: path.join(staticPath, './js/bundle.js'),
  styles: path.join(staticPath, './css/styles.css'),
  server: {
    host: '0.0.0.0',
    port: 5555, 
  },
};
