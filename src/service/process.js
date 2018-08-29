
import routers from './routers';
import config from '../../config/config';

const Methods = {
  post: 'post',
  get: 'get',
  delete: 'delete',
  put: 'put',
  form: 'post'
};
const ContentTypes = {
  json: { 'Content-Type': 'application/x-www-form-urlencoded' },
  form: { 'Content-Type': 'multipart/form-data' }
};

const host = config.get('host');
const prefix = config.get('prefix');

const curry = (host, method, contentType) => {
  return (url, namespace) => {
    return {
      url: host + prefix + url,
      method: method,
      headers: contentType,
      namespace
    };
  };
};
const postMethod = curry(host, Methods.post, ContentTypes.json);
const getMethod = curry(host, Methods.get, ContentTypes.json);
const deleteMethod = curry(host, Methods.delete, ContentTypes.json);
const putMethod = curry(host, Methods.put, ContentTypes.json);
const formMethod = curry(host, Methods.form, ContentTypes.form);

let actions = {};
routers && routers.forEach(route => {
  switch (route[1]) {
    case 'post':
      actions[route[2]] = postMethod(route[0], route[3]);
      break;
    case 'get':
      actions[route[2]] = getMethod(route[0], route[3]);
      break;
    case 'delete':
      actions[route[2]] = deleteMethod(route[0], route[3]);
      break;
    case 'put':
      actions[route[2]] = putMethod(route[0], route[3]);
      break;
    case 'form':
      actions[route[2]] = formMethod(route[0], route[3]);
      break;
  }
});
export default actions;
