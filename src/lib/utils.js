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
export const promiseCurry = (promise, params, catcher) => {
    /**
     * @param { function } promise 执行的promise函数
     * @param { Object } params promise执行传递的参数
     * @param { function } catcher 要执行的catch函数
     * @return { Promise } 返回一个promise
     */
    return promise().then(res => {
        return res
    }).catch(error => {
        assert(true, catcher);
    });
};