export function handleLogin() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: (res) => {
        resolve(res.code as string);
      },
      fail: reject
    })
  })
}