import request from '@/utils/request'

export function login(data) {
  return request({
    // 设置请求参数为字符串
    transformRequest: function (obj) {
      var str = [];
      for (var p in obj) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
      return str.join("&");
    },
    url: '/login',
    method: 'post',
    data: data
  })
}
export function logout() {
  return request({
    url: '/logout',
    method: 'get',
  })
}
