const app = {
  state: {
    example: '0', // 这是个例子，项目中没用到
  },
  mutations: {
    set_example: (state, menuexample) => { state.example = menuexample },
    clear_navState: (state) => { 
      state.example = '0';
    },
  },
  actions: {

  }
}

export default app
