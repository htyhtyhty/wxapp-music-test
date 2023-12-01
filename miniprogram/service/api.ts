export function handleRequest(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      success: (res) => {
        resolve(res.data)
      },
      fail: reject
    })
  })
}