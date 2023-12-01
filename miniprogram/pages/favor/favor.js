Page({
  data: {
    message: 'Can You Know',
    counter: 0,
    payload: 1,
    movies: ['大宋少年志', '星际穿越', '独行月球', '流浪地球', '梦华录', '莲花楼']
  },
  // 监听的事件函数方法
  add() {
    console.log('+1', this.data.counter);
    // this.data.counter += 1; // 此修改方式可以修改counter, 但不会触发响应式, 不会自动检测新数据, 重新渲染页面
    // 修改data中数据, 且页面重新渲染, 必须使用this.setData()
    this.setData({
      counter: this.data.counter + this.data.payload
    })
  },
  dec() {
    console.log('-1');
    // this.data.counter += 1;
    this.setData({
      counter: this.data.counter - this.data.payload
    })
  },
  changePayload() {
    this.setData({
      payload: this.data.payload === 1 ? 5 : 1
    })
  },
  // 生命周期函数
  onLoad() {
    console.log('onLoad')
  },
  onShow() {
    console.log('onShow')
  },
  onReady() {
    console.log('onReady')
  },
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  }
})