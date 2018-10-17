import URL from './urlsConfig';
const MAP = new Map();
const defaultConf = {
  prefix: '/v1',
  method: 'get'
};
Object.keys(URL).forEach(key => {
  MAP.set(key, Object.assign({}, defaultConf, URL[key]));
});
export default MAP;
