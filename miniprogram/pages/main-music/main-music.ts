import { getBannerData,getMusicRank, getFeaturedMusicList, getCategoryMusicList } from '../../services/music/musicApi'
import { getTargetElementInfo } from '../../utils/utils';
import {throttle} from 'underscore';
import {rankingStore} from '../../store/rankingStore';
import { featuredStore } from '../../store/featuredStore';
import {categoryStore} from '../../store/categoryStore'
const getTargetElementInfoThrottle = throttle(getTargetElementInfo, 100, {trailing: false});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    bannerHeightList: [] as any,
    bannerHeight: 130,
    hotMusicList: [],
    peakMusicList: [],
    originalMusicList: [],
    soarMusicList: [],
    headerTitle: '热歌榜单',
    featuredMusicList: [],
    categoryMusicList: [],
  },
  // 获取轮播图banner
  async getBannerList() {
    const res = await getBannerData(2);
    this.setData({
      bannerList: res.banners
    })
  },
  // 获取热门歌单
  async getFeaturedMusicData() {
    const res = await getFeaturedMusicList({limit: 6, offset: 6, cat: '全部'});
    this.setData({
      featuredMusicList: res.playlists
    })
  },
  // 获取分类歌单
  async getCategoryMusicData() {
    const res = await getCategoryMusicList();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getBannerList();
    this.getCategoryMusicData();
    featuredStore.onState('featuredMusicList', (newValue) => {
      this.setData({
        featuredMusicList: newValue
      })
    })
    featuredStore.dispatch('getFeaturedMusicList');
    categoryStore.onState('categoryMusicList', (newValue) => {
      this.setData({
        categoryMusicList: newValue
      })
    })
    categoryStore.dispatch('getCategoryMusicList')
    rankingStore.onStates(['hotMusicList', 'peakMusicList', 'originalMusicList', 'soarMusicList'], (newValue) => {
      const [key, value]= Object.entries(newValue)[0];
      this.setData({
        [key]: value
      })
    })
    rankingStore.dispatch('getRankingMusicList')
  },
  onSearchJump() {
    wx.navigateTo({
      url: '../detail-search/detail-search'
    })
  },
  async onImageLoaded() {
    const res = await getTargetElementInfoThrottle('swiper-image')
    this.setData({
      bannerHeightList: [...this.data.bannerHeightList, res[0].height]
    });
  }, 
  onSwiperChange(e: any) {
    this.setData({
      bannerHeight: this.data.bannerHeightList[e.detail.current]
    })
  }
})