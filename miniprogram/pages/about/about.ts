// pages/about/about.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listCount: 30
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('我下拉了')
    setTimeout(() => {
      wx.stopPullDownRefresh({
        success: (res) => {
          console.log('停止下拉刷新');
        },
        fail: (err) => {
          console.log('失败')
        }
      })
    }, 500)

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('到了底部')
    this.setData({ 
      listCount: this.data.listCount + 30 
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})