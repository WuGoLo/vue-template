const getters = {
  token: state => state.app.token,
  userInfo: state => state.user,
  menuexample: state => state.app.example, // 这是个例子，项目中没用到
}
export default getters
