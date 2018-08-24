export default [
    /**
     * @param { string } route 路由名称
     * @param { string } action 动作名称
     * @param { string } method 请求方法
     * @param { string } namespace 命名空间
    */
    ['/user/login', 'post', 'login', 'default,user'],
    ['/user/info/:userID', 'get', 'fetchUserInfo', 'default,user']
]