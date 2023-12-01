import { HYEventStore } from 'hy-event-store';
import { getFeaturedMusicList } from '../services/music/musicApi';
export const featuredStore = new HYEventStore({
  state: {
    featuredMusicList: []
  },
  actions: {
    async getFeaturedMusicList(context: any) {
      const res = await getFeaturedMusicList();
      context.featuredMusicList = res.playlists;
    }
  }
});