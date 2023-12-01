import { HYEventStore } from 'hy-event-store';
import { getMusicRank } from '../services/music/musicApi';
const RANK_MAP: any = {
  '3778678': 'hotMusicList',
  '19723756': 'peakMusicList',
  '2884035': 'originalMusicList',
  '3779629': 'soarMusicList'
};
const listIds = [3778678, 19723756, 3779629, 2884035];
export const rankingStore = new HYEventStore({
  state: {
    hotMusicList: [],
    peakMusicList: [],
    originalMusicList: [],
    soarMusicList: [],
  },
  actions: {
    getRankingMusicList(context: any) {
      listIds.forEach(async (item) => {
        const res = await getMusicRank(item);
        context[RANK_MAP[`${item}`]] = res.playlist;
      })  
    }
  }
});