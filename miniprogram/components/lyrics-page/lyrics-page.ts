Component({

  /**
   * 组件的属性列表
   */
  properties: {
    parseLyrics: {
      type: Array,
      value: []
    },
    songInfo: {
      type: Object,
      value: {}
    },
    currentLyricsIndex: {
      type: Number,
      value: 0
    },
    scrollTop: {
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
  },
  lifetimes: {
    attached() {
      console.log(this.properties.parseLyrics)
    }
  }
})