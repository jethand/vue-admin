import env from './env';

const port = 8000;
var conf = {
    version: '1.0.0',
    env,
    port,
    host: env === 'development' ? `${location.protocol}//${location.hostname}:${port}` : location.origin,
    prefix: '/v1'
};


class Config {
    get(key, defaultVal){
        if(conf.hasOwnProperty(key)) {
            return conf[key];
        }
        return defaultVal;
    }
    set(key, val){
        conf[key] = val;
    }
}

export default new Config();

