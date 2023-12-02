// app.ts
App<IAppOption>({
  globalData: {
    screenWidth: 375,
    statusBarHeight: 44,
  },
  onLaunch() {
    wx.getSystemInfo({
      success: (res) => {
        console.log(res)
        this.globalData.screenWidth = res.screenWidth;
        this.globalData.statusBarHeight = res.statusBarHeight;
      }
    })
  }
})