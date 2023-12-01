class myReqInstance {
  baseUrl:string;
  constructor(baseUrl:string) {
    this.baseUrl = baseUrl // http://codercba.com:9002/ https://coderwhy-music.vercel.app/
  }
  request(options:any) {
    const {url} = options;
   return new Promise((resolve, reject) => {
    wx.request({
      ...options, 
      url: this.baseUrl + url,
      success: (res) => {
        resolve(res.data)
      },
      fail: reject
    })
  }) 
 }
 get(options:any) {
  const {url} = options;
   return this.request({
     ...options, 
     url,
     method: 'get'
   })
 }
 post(options:any) {
  const {url} = options;
   return this.request({
     ...options,
     url,
     method: 'post'
   })
 }
}
export const musicRequest = new myReqInstance('http://codercba.com:9002');