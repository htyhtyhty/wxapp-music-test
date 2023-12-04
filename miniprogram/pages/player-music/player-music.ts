import { getDetailMusicInfo, getLyricsInfo } from '../../services/music/musicApi';
import { parseLyrics } from '../../utils/utils';
const app = getApp();
let audioContext: any
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 0,
    ids: 0,
    songInfo: {},
    playerSwiperHeight: 0,
    currentPlayTime: 0,
    isPause: false,
    statusIcon: '/assets/暂停.png',
    lyricsInfo: '',
    parseLyrics: [],
    currentLyricsIndex: 0,
    sliderValue: 0,
    lyricsActiveIndex: 0,
    scrollTop: 0,
    index: 1,
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
  },
  async fetchLyricsInfo() {
    const res = await getLyricsInfo(this.data.ids);
    console.log(res, 'res')
    this.setData({
      lyricsInfo: res.lrc?.lyric
    })
    this.setData({
      parseLyrics: parseLyrics(res.lrc?.lyric)
    })
  },
  judgeCurrentLyrics() {
    const initIndex = this.data.parseLyrics.findIndex((item, idx) => {
      return item.time > this.data.currentPlayTime;
    });
    this.lyricsSliderEvent();
    this.setData({
      currentLyricsIndex: initIndex - 1
    });
  },
  // 歌词滚动事件
  lyricsSliderEvent(isSlider: boolean = false) {
    const initIndex = this.data.parseLyrics.findIndex(item => {
      return item.time > this.data.currentPlayTime;
    });
    if (isSlider) {
      this.setData({
        index: this.data.currentLyricsIndex - this.data.lyricsActiveIndex + 3
      });
    }
    if (this.data.currentLyricsIndex > this.data.lyricsActiveIndex - 3 && this.data.currentLyricsIndex === initIndex - 2) {
      this.setData({
        scrollTop: this.data.index * 35,
        index: this.data.index + 1
      });
    }
  },
  // 播放器相关事件
  onPlayerEvent() {
    audioContext = wx.createInnerAudioContext();
    audioContext.src = `https://music.163.com/song/media/outer/url?id=${this.data.ids}.mp3`;
    audioContext.autoplay = true;
    audioContext.onCanplay(() => {
      const duration = audioContext.duration;
    });
    audioContext.onTimeUpdate(() => {
      this.setData({
        currentPlayTime: audioContext.currentTime * 1000,
        sliderValue: ~~((audioContext.currentTime * 1000 / this.data.songInfo.dt) * 100),
        lyricsActiveIndex: ~~(app.globalData.lyricsMiddleHeight / 42)
      });
      this.judgeCurrentLyrics();
      if (audioContext.currentTime >= this.data.songInfo.dt) {
        this.setData({
          isPause: true
        })
      }
    })
  },
  onSliderChange(e) {
    this.setData({
      currentPlayTime: this.data.songInfo.dt * (e.detail.value / 100),
      sliderValue: e.detail.value,
    });
    this.judgeCurrentLyrics();
    this.lyricsSliderEvent(true);
    console.log(this.data.index, 'sliderindex')
    audioContext.seek(this.data.currentPlayTime / 1000)
  },
  onChangePlayStatus() {
    this.setData({
      isPause: !this.data.isPause,
      statusIcon: this.data.isPause ? '/assets/暂停.png' : '/assets/播放.png'
    })
    if (this.data.isPause) {
      audioContext.pause();
    } else {
      audioContext.play();
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      ids: options.ids,
      playerSwiperHeight: app.globalData.screenHeight - 44 - app.globalData.statusBarHeight

    });
    this.fetchDetailMusicInfo();
    this.fetchLyricsInfo();
    if (!this.data.isPause) {
      this.onPlayerEvent()
    }
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