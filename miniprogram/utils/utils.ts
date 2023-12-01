// export const getTargetElementInfo = (elementClassName:string, callback:Function) => {
//   const query = wx.createSelectorQuery();
//   query.select(`.${elementClassName}`).boundingClientRect();
//   query.exec(res => {
//     callback(res)
//   })
// }
export const getTargetElementInfo = (elementClassName:string) => {
  return new Promise((resolve, reject) => {
    const query = wx.createSelectorQuery();
    query.select(`.${elementClassName}`).boundingClientRect();
    query.exec(res => {
      resolve(res);
    })
  })
}