import { create } from 'zustand';

// Define Zustand store with API fetching logic
export const useAnimeStore = create((set) => ({
  topAnime: [],
  loading: false,
  error: null,
  fetchTopAnime: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://api.jikan.moe/v4/top/anime/');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      set({ topAnime: data.data, loading: false });
      console.log("Jikan API result: "+ topAnime)
    } catch (error) {
      set({ error: error.message, loading: false });
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
      const response = await fetch('https://yumaapi.vercel.app/top-airing');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      set({ spotlightAnime: data.results, loading: false });
      // console.log(spotlightAnime)
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
