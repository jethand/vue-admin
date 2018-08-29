export default {
  state: {
    userInfo: {}
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data;
    }
  },
  actions: {
    handleLogin ({ state, commit }, { userName, password }) {
      userName = userName.trim();
      return new Promise((resolve, reject) => {
        fn().then(res => {
          resolve(res);
        });
      });
    }
  }
};
