import env from './env';
import pk from '../package.json';
var conf = {
  version: pk.version,
  env,
  host: env === 'development' ? `${location.protocol}//${location.hostname}:${location.port}` : `${location.protocol}//${location.hostname}:${location.port}`,
  prefix: '/v1',
  service: { 
    mode: 'module' // module：_S仅挂载模块路由; simple: _S直接挂载全量路由; full: _S不仅挂载模块路由，也挂载全量路由
  }
};

class Config {
  get (key, defaultVal) {
    if (conf.hasOwnProperty(key)) {
      return conf[key];
    }
    return defaultVal;
  }
  set (key, val) {
    conf[key] = val;
  }
};

export default new Config();
