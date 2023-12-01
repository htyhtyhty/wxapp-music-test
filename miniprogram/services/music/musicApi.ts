import { musicRequest } from '../api';
export const getBannerData = async (type: number) => {
  return await musicRequest.get({
    url: '/banner',
    data: {
      type
    }
  })
}

// 获取歌曲榜单排行  新歌: 3779629 原创: 2884035 飙升: 19723756 热歌: 3778678
export const getMusicRank = async (id: number) => {
  return await musicRequest.get({
    url: '/playlist/detail',
    data: {
      id
    }
  })
}
// 获取网友精选歌单
export const getFeaturedMusicList = async (options = { cat: "全部", limit: 6, offset: 6}) => {
  const {limit, offset, cat} = options;
  return await musicRequest.get({
    url: '/top/playlist',
    data: {
      limit,
      offset,
      cat
    }
  })
}

// 获取热门歌单分类
export const getCategoryMusicList = async () => {
  return await musicRequest.get({
    url: '/playlist/hot'
  })
}

// 获取歌曲详情
export const getDetailMusicInfo = async (ids:number) => {
  return await musicRequest.get({
    url: 'song/detail',
    data: {
      ids
    }
  })
}

// 获取歌词详情
export const getLyricsInfo = async (id:number) => {
  return await musicRequest.get({
    url: '/lyric',
    data: {
      id
    }
  })
}