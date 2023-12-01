import { getTopMV } from "../../services/video/videoApi";
interface IData {
  videoList: any[];
  offset: number;
  isReachBottom: boolean;
}
Page({
  data: {
    videoList: [],
    offset: 0,
    isReachBottom: false
  } as IData,
  async fetchTopMV(options: any = { limit: 20, offset: 0 }) {
    const res: any = await getTopMV(options);
    this.setData({
      videoList: [...this.data.videoList, ...res.data],
    })
    if (res.code === 400 || !res.hasMore) {
      this.setData({
        isReachBottom: true
      })
    }
    return res;
  },
  onLoad() {
    this.fetchTopMV()
  },
  async onPullDownRefresh() {
    this.setData({
      videoList: []
    })
    const res = await this.fetchTopMV();
    if (res?.data?.length !== 0) {
      this.setData({
        videoList: res.data,
        offset: 0,
        isReachBottom: false
      })
      wx.stopPullDownRefresh({
        success: (res) => {
          console.log(res, '获取数据刷新成功');
        },
        fail: (err) => {
          console.log(err, '刷新获取失败');
        }
      })
    }
  },
  onReachBottom() {
    if (!this.data.isReachBottom) {
      this.data.offset += 20;
      this.fetchTopMV({
        limit: 20,
        offset: this.data.offset
      })
    }
  }
})