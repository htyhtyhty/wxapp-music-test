const app = getApp();
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    currentPage: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: 44
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickBack() {
      wx.navigateBack();
    }
  },
  lifetimes: {
    attached() {
      console.log(app.globalData.statusBarHeight, 'heigth')
      this.setData({
        statusBarHeight: app.globalData.statusBarHeight
      })
    }
  }
})