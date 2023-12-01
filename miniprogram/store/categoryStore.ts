import { HYEventStore } from 'hy-event-store';
import { getCategoryMusicList } from '../services/music/musicApi';
export const categoryStore = new HYEventStore({
  state: {
    categoryMusicList: []
  },
  actions: {
    async getCategoryMusicList(context: any) {
      const res = await getCategoryMusicList();
      context.categoryMusicList = res.tags;
    }
  }
});