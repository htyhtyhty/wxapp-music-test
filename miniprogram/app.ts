// app.ts
App<IAppOption>({
  globalData: {
    screenWidth: 375,
    screenHeight: 667,
    statusBarHeight: 44,
    lyricsMiddleHeight: 0,
  },
  onLaunch() {
    wx.getSystemInfo({
      success: (res) => {
        console.log(res)
        this.globalData.screenWidth = res.screenWidth;
        this.globalData.statusBarHeight = res.statusBarHeight;
        this.globalData.screenHeight = res.screenHeight;
        this.globalData.lyricsMiddleHeight = (res.screenHeight - 44 - res.statusBarHeight) / 2
      }
    })
  }
})