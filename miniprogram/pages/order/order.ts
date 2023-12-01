// pages/order/order.ts
Page({

  // 作用一: 发送网络请求, 在onLoad中发送网络请求
  /**
   * 页面的初始数据
   */
  data: {
    message: '',
    userInfo: {},
    bannerList: [],
    imageList: [],
    score: 90,
    isShow: true,
    tabList: ['新闻', '关于', '简介', '联系我们'],
    selectedKey: 0,
  },
  getUserInfo(event) {
    console.log(event, 'event')
  },
  getUserInfoNew() {
    wx.getUserProfile({
      desc: '获取用户信息',
      success: (res) => {
        console.log(res, 'res')
      }
    })
  },
  getPhoneNumber(event) {
    console.log(event)
  },
  onchooseImage() {
    wx.chooseMedia({
      mediaType: 'image'
    }).then((res) => {
      console.log(res, 'resres')
      this.setData({
        imageList: res.tempFiles.map((item) => {
          return item.tempFilePath;
        })
      })
    }).catch(err => {
      console.log(err, 'err')
    })
  },
  onChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  onChangeClick(e) {
console.log(e, 'e')
  },
  onChangeTab(e) {
    if (e.currentTarget.dataset.tab === this.data.selectedKey) return;
    this.setData({
      selectedKey: e.currentTarget.dataset.tab
    })
  },
  onTitleClickSection(e) {
    console.log('组件内部被点击了', e.detail)
  }, 
  getSelectedTab(e) {
    this.setData({
      selectedKey: e.detail
    })
    console.log(this.data.tabList[e.detail])
  },
  getCurrentLocation() {
    wx.getLocation({
      success: (res) => {
        console.log(res, '位置信息')
      },
      fail: (err) => {
        console.log(err, '获取位置信息失败')
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 在onLoad中获取共享的数据: App实例中的数据
    //1 获取App实例对象
    const app = getApp();
    //2 从App实例对象中获取数据
    const {token, userInfo} = app.globalData;
    console.log(token, userInfo);
    //3 拿到token 目的是发送网络请求 wx.request
    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
      success: (res) => {
        console.log(res.data.data.banner.list)
        this.setData({
          bannerList: res.data.data.banner.list
        })
      }
    })
    //4 将数据渲染到界面上
    this.setData({
      userInfo: userInfo
    });
    wx.setStorage({
      key: 'name', 
      data: ['tianyi', 4, 5, 6],
      encrypt: true, // 加密
      success: (res) => {
        console.log(res);
      }
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})