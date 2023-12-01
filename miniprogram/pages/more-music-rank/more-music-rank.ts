import {rankingStore} from '../../store/rankingStore'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: '',
    rankMusicList: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      category: options.category
    })
    rankingStore.onState(`${options.category}`, (value) => {
      this.setData({
        rankMusicList: {
          [options.category as string]: value.tracks
        }
      })
    });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    rankingStore.offState(`${this.data.category}`, (value) => {
      this.setData({
        rankMusicList: {
          [this.data.category]: value.tracks
        }
      })
    })
  },
})