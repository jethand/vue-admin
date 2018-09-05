
import Axios from 'axios';
import { Message } from 'iview';

class Service {
  constructor () {
    this.queue = {};
  }
  destroy (url) {
    delete this.queue[url];
    const queue = Object.keys(this.queue);
    return queue.length;
  }
  interceptors (instance, url) {
    instance.interceptors.response.use((res) => {
      let { data } = res;
      const is = this.destroy(url);
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
  create () {
    let conf = {
      withCredentials: true
    };
    return Axios.create(conf);
  }
  request (options) {
    var instance = this.create();
    this.interceptors(instance, options.url);
    options = Object.assign({}, options);
    this.queue[options.url] = instance;
    return instance(options);
  }
}
export default new Service();
