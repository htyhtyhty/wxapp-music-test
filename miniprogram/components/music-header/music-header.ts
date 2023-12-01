// components/music-header/music-header.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    headerTitle: {
      type: String,
      value: '默认标题'
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
    onMoreClick() {
      wx.navigateTo({
        url: '/pages/more-music/more-music'
      })
    }
  }
})