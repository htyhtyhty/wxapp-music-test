import {featuredStore} from '../../store/featuredStore';
const app = getApp();
Component({

  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    featuredMusicList: [],
    screenWidth: 375,
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }, 
  lifetimes: {
    attached: function () {
      featuredStore.onState('featuredMusicList', (newValue) => {
        this.setData({
          featuredMusicList: newValue
        })
      });
      this.setData({
        screenWidth: app.globalData.screenWidth,
      })
    }
  }
})