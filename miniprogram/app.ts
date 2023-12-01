// app.ts
import {handleRequest} from './service/api';
import { handleLogin } from './service/login';
App<IAppOption>({
  // 全局共用数据
  globalData: {
    token: 'tianyi',
    userInfo: {
      userName: 'tianyi',
      age: 18,
      sex: 'man'
    }
  } as {token:string; userInfo:any},
  async loginEvent() {
    const code = await handleLogin();
    const data:any = await handleRequest({
      url: 'http://123.207.32.32:3000/login', 
      data: {code}, 
      method: 'POST',
    });
    wx.setStorageSync('realToken', data.token);
    // 判断token是否过期
    const isOut = await handleRequest({
      url: 'http://123.207.32.32:3000/auth', 
      header: {token: data.token}, 
      method: 'POST',
    })
    if (data.token && isOut.message === '已登录') {
      return 
    }
    this.loginEvent();
  },
  onLaunch(options) {
    const token = wx.getStorageSync('realToken');
    if (token) {
      // 请求
    } else {
      this.loginEvent()
      // const token = handleLogin()
      // handleLogin()
      // .then(res => {
      //   handleRequest({
      //     url: 'http://123.207.32.32:3000/login', 
      //     data: {code: res}, 
      //     method: 'POST',
      //   })
      // .then(res => {
      //   wx.setStorageSync('tokens', res.token)
      // })
      // })
      // wx.login({
      //   success: (res) => {
      //      const code = res.code;
      //     console.log(res.code, 'resres')
      //     wx.request({
      //       url: 'http://123.207.32.32:3000/login',
      //       data:{
      //         code
      //       },
      //       method: 'POST',
      //       success: (res) => {
      //         console.log(res.data.token, 'resresres');
      //         wx.setStorageSync('token', res.data.token)
      //       }
      //     })
      //   }
      // })
    }

    console.log('小程序启动了', options, options.scene, '场景值')
    // 展示本地存储能力
    wx.setStorageSync('token', this.globalData.token)
    wx.setStorageSync('userInfo', this.globalData.userInfo)

    /**
     * 
     * vx.navigateTo({
      url: "/pages/index/index" url必须前面加"/" 且路径不能有中文
    })
     */ 

    // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res.code)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   },
    // })
  },
  onShow(options) {
    console.log('onShow', options)
  },
  onHide() {
    console.log('onHide')
  }
})