import {musicRequest} from '../api';
import {ITopMvParams} from './videoApiType';
// 获取视频列表数据
export async function getTopMV(options:ITopMvParams = {limit: 20, offset: 0}) {
  const {limit, offset} = options;
  return await musicRequest.get({
    url: '/top/mv',
    data: {
      limit,
      offset
    }
  })
} 

// 根据id获取视频详情数据
export async function getDetailMVUrl(id:number) {
  return await musicRequest.get({
    url: '/mv/url',
    data: {
      id
    }
  })
}

// 根据id获取MV数据 名字歌手 发布时间等
export async function getDetailMVData(id:number) {
  return await musicRequest.get({
    url: '/mv/detail',
    data: {
      mvid: id,
    }
  })
}

// 获取相关视频
export async function getRelatedMV(id:number) {
  return await musicRequest.get({
    url: '/related/allvideo',
    data: {
      id
    }
  })
}