
import Axios from 'axios';
import { Message } from 'iview';
import URL from './url';
import config from '../../config/config';
class Service {
  constructor () {
    this.$queue = {};
    this.contentTypes = {
      json: { 'Content-Type': 'application/x-www-form-urlencoded' },
      form: { 'Content-Type': 'multipart/form-data' }
    };
  }
  $destroy (url) {
    delete this.$queue[url];
    const $queue = Object.keys(this.$queue);
    return $queue.length;
  }
  $interceptors (instance, url) {
    instance.interceptors.response.use((res) => {
      let { data } = res;
      const is = this.$destroy(url);
      if (data.errorCode !== 0) {
        if (data.errorCode === 11111) {
          window.location.href = '/login';
          Message.error('未登录，或登录失效，请登录');
        } else {
          if (data.errorMsg) Message.error(data.errorMsg);
        }
        return Promise.reject(data);
      }
      return data;
    }, (error) => {
      Message.error('网络发生错误了！');
      return Promise.reject(error);
    });
  }
  $formatUrl (options, isDev) {
    if (!options.url) return null;
    let url = isDev ? URL.get(options.url).real : URL.get(options.url).mock;
    const keys = url.match(/\{\w+\}/g);
    let rowKey,
      replace;
    keys && keys.forEach(key => {
      rowKey = key.substr(1, key.length - 2);
      replace = !options.params || !options.params[rowKey] || JSON.stringify(options.params[rowKey]) === '{}' ? '' : options.params[rowKey];
      url = url.replace(new RegExp(key, 'g'), replace);
    });
    return url;
  }
  $formatRequest (options) {
    const isDev = config.get('env') === 'development' ? 1 : 0; // development || production || mock 
    const method = URL.get(options.url).method;
    const headers = method === 'form' ? this.contentTypes.form : this.contentTypes.json;
    const target = isDev ? `${window.location.protocol}//${window.location.hostname}:${window.location.port}` : `${window.location.protocol}//${window.location.hostname}:${config.get('webSitPort')}`;
    const opt = {
      method,
      headers
    };
    opt.url = target + URL.get(options.url).prefix + this.$formatUrl(options, isDev);
    if (options.data) {
      options.data = data;
    }
    return opt;
  }
  $create () {
    let conf = {
      withCredentials: true
    };
    return Axios.create(conf);
  }
  $request (options) {
    const instance = this.$create();
    options = this.$formatRequest(options);
    this.$interceptors(instance, options.url);
    this.$queue[options.url] = instance;
    return instance(options);
  }
}
export default Service;
