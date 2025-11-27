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
       //console.log("Jikan API result: "+ data)
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
  animeInfo: [],
  loading: false,
  error: null,
  fetchAnimeInfo: async (animeId) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`https://yumaapi.vercel.app/info/${animeId}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      set({ animeInfo: data, loading: false });
        console.log(data)
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error(error);
    }
  },
}));
