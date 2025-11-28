import { create } from 'zustand';

// Define Zustand store with API fetching logic
export const useAnimeStore = create((set) => ({
  topAnime: [],
  loading: false,
  error: null,
  fetchTopAnime: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://yumaapi.vercel.app/top-airing');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      set({ topAnime: data.results, loading: false });
      //console.log("Top Anime: "+ data.results)
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error(error);
    }
  },
}));

export const useSpotlightAnimeStore = create((set) => ({
  spotlightAnime: [],
  loading: false,
  error: null,
  fetchSpotlightAnime: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://yumaapi.vercel.app/spotlight');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      set({ spotlightAnime: data, loading: false });
        // console.log(data)
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error(error);
    }
  },
}));

export const useAnimeInfoStore = create((set) => ({
  animeInfo: null,
  loading: false,
  error: null,
  genres: [],
  episodes: [],
  fetchAnimeInfo: async (animeId) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`https://yumaapi.vercel.app/info/${animeId}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      set({ animeInfo: data, loading: false, genres: data.genres, episodes: data.episodes });
      console.log("anime info: "+data)
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error(error);
    }
  },
}));

export const useAnimeEpisodeSourcesStore = create((set) => ({
  animeSources: [],
  subtitles: [],
  loading: false,
  error: null,
  fetchAnimeEpisodeSource: async (episodeId,sub,server) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`https://yumaapi.vercel.app/watch?episodeId=${episodeId}&type=sub&server=vidcloud`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      set({ animeSources: data.sources, subtitles: data.subtitles, loading: false});
      console.log("anime source: "+data.sources)
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error(error);
    }
  },
}));
