// app.ts
App<IAppOption>({
  globalData: {
    screenWidth: 375
  },
  onLaunch() {
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.screenWidth = res.screenWidth;
      }
    })
  }
})