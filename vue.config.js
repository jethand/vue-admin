const path = require('path');
const fs = require('fs');
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
    

}