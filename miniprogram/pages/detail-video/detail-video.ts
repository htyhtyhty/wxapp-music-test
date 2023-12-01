// pages/detail-video/detail-video.ts
import {getDetailMVUrl, getDetailMVData, getRelatedMV} from '../../services/video/videoApi';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoId: 0,
    videoUrl: '',
    barrageList: [
      {
        text: '好听1', color: '#368', time: 3
      },
      {
        text: '好听2', color: '#368', time: 8
      },
      {
        text: '好听3', color: '#368', time: 17
      },
      {
        text: '好听4', color: '#368', time: 34
      },
      {
        text: '好听5', color: '#368', time: 37
      },
      {
        text: '好听6', color: '#368', time: 56
      },
      {
        text: '好听7', color: '#368', time: 3
      },
      {
        text: '好听8', color: '#368', time: 3
      },
    ],
    videoInfo: {},
    relatedVideo: []
  },

  // 获取视频url
  async getDetailMvUrl(id:number) {
    const res:any = await getDetailMVUrl(id);
    this.setData({
      videoUrl: res.data.url
    })
  },
  // 获取视频详情信息
  async getDetailMvData(id:number) {
    const res:any = await getDetailMVData(id);
    console.log(res.data, '详情信息')
    this.setData({
      videoInfo: res.data
    })
  },
  // 获取相关视频信息
  async getRelatedMv(id:number) {
    const res:any = await getRelatedMV(id);
    console.log(res, '相关视频')
    this.setData({
      relatedVideo: res.data
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      videoId: Number(options.videoId)
    })
    this.getDetailMvUrl(this.data.videoId)
    this.getDetailMvData(this.data.videoId)
    // this.getRelatedMv(this.data.videoId)
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