
const user = {
  state: {
    loginName: "",
    roleName: null,
    userId: 1,
    userName: "userName",
  },

  mutations: {
    SET_USERINFO(state, userInfo) {
      state = userInfo;
    },
    CLEAR_USERINFO(state) {
      state = {
        loginName: "",
        roleName: null,
        userId: 1,
        userName: "",
      }
    }
  },

  actions: {
    setUserInfo({commit}, userInfo) {
      commit('SET_USERINFO', userInfo)
    }
  }
}

export default user
