// export const getTargetElementInfo = (elementClassName:string, callback:Function) => {
//   const query = wx.createSelectorQuery();
//   query.select(`.${elementClassName}`).boundingClientRect();
//   query.exec(res => {
//     callback(res)
//   })
// }
export const getTargetElementInfo = (elementClassName: string) => {
  return new Promise((resolve, reject) => {
    const query = wx.createSelectorQuery();
    query.select(`.${elementClassName}`).boundingClientRect();
    query.exec(res => {
      resolve(res);
    })
  })
};
export const parseLyrics = (lyrics: any) => {
  const initArr = lyrics.split('\n').map((item, idx) => {
    return (/\[(\d{2}):(\d{2})\.(\d{2,3})\]/g).exec(item)
  })
  const timeSplice = initArr.map(item => {
    if (item) {
      return {time: Number(item?.[1] * 60 * 1000 )+ Number(item?.[2] * 1000) + Number(item?.[3]), text: item.input.replace(/\[(\d{2}):(\d{2})\.(\d{2,3})\]/g, '')}
    }
    return 0;
  })
  return timeSplice;
}