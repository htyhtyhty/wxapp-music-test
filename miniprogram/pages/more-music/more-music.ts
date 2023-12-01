import {rankingStore} from '../../store/rankingStore'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotMusicList: [],
    peakMusicList: [],
    originalMusicList: [],
    soarMusicList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    rankingStore.onStates(['hotMusicList', 'peakMusicList', 'originalMusicList', 'soarMusicList'], (value) => {
      this.setData({
        ...value
      })
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    rankingStore.offStates(['hotMusicList', 'peakMusicList', 'originalMusicList', 'soarMusicList'], (value) => {
      console.log(value, 'value')
      this.setData({
        ...value
      })
    })
  },
})