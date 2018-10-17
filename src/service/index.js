import service from './service';
import actions from './process';
import { formatUrl } from '@/lib/utils';
import config from '../../config/config';
const actionColleation = {};
const serviceConf = config.get('service');
const getApiInstance = (router) => {
  return (data, params = {}) => {
    /** 
     * @param { Object } data axios request post data
     * @param { Object } params axios request get params
    */
    let url = router.url;
    url = formatUrl(url, data);
    let config = {
      url,
      method: router.method,
      headers: router.headers,
      params,
      data
    };
    return service.request(config);
  };
};
const setObject = (object, key) => {
  object[key] = object[key] || {};
};
let namespaceName = null;
for (let action in actions) {
  if (actions[action].url) {
    namespaceName = actions[action].namespace;
    switch (serviceConf.mode) {
      case 'module':
        setObject(actionColleation, namespaceName);
        actionColleation[namespaceName][action] = getApiInstance(actions[action]);
        break;
      case 'simple':
        actionColleation[action] = getApiInstance(actions[action]);
        break;
      case 'full':
        actionColleation[action] = getApiInstance(actions[action]);
        setObject(actionColleation, namespaceName);
        actionColleation[namespaceName][action] = getApiInstance(actions[action]);
        break;
    }
  } else {
    new Error('Lack of request url');
  }
}
export default actionColleation;
