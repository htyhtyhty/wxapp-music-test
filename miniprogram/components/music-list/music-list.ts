import {ranking, rankingStore} from '../../store/rankingStore';
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    hotMusicList: {
      type: Object,
      value: {}
    },
    originalMusicList: {
      type: Object,
      value: {}
    },
    peakMusicList: {
      type: Object,
      value: {}
    },
    soarMusicList: {
      type: Object,
      value: {}
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickGetRank(e) {
      console.log(e.currentTarget.dataset.category, 'e')
      wx.navigateTo({
        url: `/pages/more-music-rank/more-music-rank?category=${e.currentTarget.dataset.category}`
      })
    }
  }
})