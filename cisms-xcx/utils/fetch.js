
/**
 * 请求帮助类
 * params.url 请求地址
 * params.method 请求方式
 * params.data 请求参数
 * 返回一个promise对象
 */
module.exports = function (params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${params.url}`,
      data: Object.assign({}, params.data),
      method: `${params.method}`,
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}
