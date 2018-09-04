export const formatUrl = (url, data) => {
  try {
    return url.replace(/\^\.\^\{(\w+)\}/g, function (match, key) {
      return data[key];
    });
  } catch (err) {
    new Error(`${err}in formatUrl`);
  }
};
export const assert = (condition, fn) => {
  condition && typeof fn === 'function' && fn();
};
export const promisePack = (promise, catcher) => {
  /**
   * @param { function } promise 执行的promise函数
   * @param { function } catcher 要执行的catch函数
   * @return { Promise } 返回一个promise
   */
  return promise().then(res => {
    return res;
  }).catch(error => {
    assert(true, catcher);
  });
};
export const fnPack = function (fn, ...args) {
  /**
   * @param {Function} fn
   * @param {Object} args 异步函数执行需要的参数
   */
  return () => {
    return fn(...args);
  };
};
export const stringPop = (str, n) => {
  /**
   * @description 删除字符串指定index
   * @return {String} 返回删除后的结果，不改变原字符串
  */
  if (typeof str !== 'string') return '';
  
  let num = n;
  let string = str.trim();
  if (n < 0) {
    num = string.length + n;
  }
  return string.substring(0, num) + string.substring(num + 1);
};
export const bindProperty = function (_Class) {
  /**
   * @param {Object} this context
   * @param {Function} Class
   * @description 绑定某个class上的所有method到目标上
   */
  const propertys = Object.getOwnPropertyNames(_Class.prototype);
  propertys.filter(property => {
    return property !== 'constructor';
  }).forEach(property => {
    this[property] = _Class.prototype[property].bind(this);
  });
};
export const groupBy = (array, fn) => {
  let groups = {};
  array.forEach(item => {
    let group = JSON.stringify(fn(item));
    groups[group] = groups[group] || [];
    groups[group].push(item);
  });
  return Object.keys(groups).map(group => {
    return groups[group];
  });
};
export const deepClone = data => {
  /**
   * @param {Array|Object} data
   * @return  deepCopy
   */
  let cloneData = data.constructor === Array ? [] : {};
  if (!data || typeof data !== 'object') {
    return data;
  }
  if (data.constructor === Array) {
    return JSON.parse(JSON.stringify(data));
  } else if (data.constructor === Object) {
    for (let i in data) {
      cloneData[i] = typeof data[i] === 'object' ? clone(data[i]) : data[i];
    }
    return cloneData;
  }
};
export const getUnion = (arr1, arr2) => {
  /**
   * @param {Array} arr1
   * @param {Array} arr2
   * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
   */
  return Array.from(new Set([...arr1, ...arr2]));
};

export const rgba = (hex, opacity) => {
  if (!/#?\d+/g.test(hex)) return hex; //如果是'red'格式的颜色值，则不转换
  let h = hex.charAt(0) === '#' ? hex.substring(1) : hex;
  let r = parseInt(h.substring(0, 2), 16);
  let g = parseInt(h.substring(2, 4), 16);
  let b = parseInt(h.substring(4, 6), 16);
  let a = opacity || 0;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
};

export const dateFormat = (format) => {
  /**
   * @param {String} format 'yyyy-MM-dd hh:mm:ss'
   * @return {String} '2018-08-29 10:30:29'
   */
  const dateNow = new Date();
  const o = {
    'M+': dateNow.getMonth() + 1, //month  
    'd+': dateNow.getDate(), //day  
    'h+': dateNow.getHours(), //hour  
    'm+': dateNow.getMinutes(), //minute  
    's+': dateNow.getSeconds(), //second  ‘
    //quarter  
    'q+': Math.floor((dateNow.getMonth() + 3) / 3), 
    'S': dateNow.getMilliseconds() //millisecond  
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (dateNow.getFullYear() + '').substr(4 - RegExp.$1.length));   
  } 
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));   
    } 
  }
  return format;   
};

export const getElCoordinate = (dom) => {
  /**
   * 获取一个DIV的绝对坐标的功能函数,即使是非绝对定位,一样能获取到
   */
  let t = dom.offsetTop;
  let l = dom.offsetLeft;
  dom = dom.offsetParent;
  while (dom) {
    t += dom.offsetTop;
    l += dom.offsetLeft;
    dom = dom.offsetParent;
  }; 
  return {
    top: t,
    left: l
  };
};
export const mousePosition = (ev) => {
  /**
   * 兼容各种浏览器的,获取鼠标真实位置
  */
  if (!ev) ev = window.event;
  if (ev.pageX || ev.pageY) {
    return { x: ev.pageX, y: ev.pageY };
  }
  return {
    x: ev.clientX + document.documentElement.scrollLeft - document.body.clientLeft,
    y: ev.clientY + document.documentElement.scrollTop - document.body.clientTop
  };
};
