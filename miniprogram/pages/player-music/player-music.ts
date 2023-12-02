import {getDetailMusicInfo} from '../../services/music/musicApi';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 0, 
    ids: 0, 
    songInfo: {}
  },
  onSwiperChange(e) {
    this.setData({
      currentPage: e.detail.current
    })
  },
  async fetchDetailMusicInfo() {
    const res = await getDetailMusicInfo(this.data.ids);
    this.setData({
      songInfo: res.songs[0]
    })
    console.log(res, 'res');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      ids: options.ids
    });
    this.fetchDetailMusicInfo();
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