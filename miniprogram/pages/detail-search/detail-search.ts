// pages/detail-search/detail-search.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  onInputChange(e) {
    this.setData({
      searchValue: e.detail
    })
  },
  onSearchClick(e) {
    console.log(e.detail, 'detail')
  },
  onClearInput() {
    this.setData({
      searchValue: '',
    })
  },
})