const path = require('path');

const BASE_URL = '/';
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  baseUrl: BASE_URL,
  outputDir: 'web',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    port: 8000
  }
};
