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
      .set('_s', resolve('src/_service/modules'))
    config.plugin('html').tap(args => {
      args[0].favicon = './public/favicon.ico';
      return args;
    });
  },
  devServer: {
    port: 8000
  }
};
