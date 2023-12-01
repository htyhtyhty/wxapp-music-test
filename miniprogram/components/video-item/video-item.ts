// components/video-item/video-item.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    itemData: {
      type: Object,
      value: {}
    },
    videoId: {
      type: Number,
      value: 0
    }
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
    onJumpToVideo() {
      wx.navigateTo({
        url: `../../pages/detail-video/detail-video?videoId=${this.properties.videoId}`,
        success: (res) => {
          console.log(`../../pages/detail-video/detail-video?videoId=${this.properties.videoId}`, 'id')
        }
      })
    }
  }
})