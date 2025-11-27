import React, { useEffect } from 'react'
import { useAnimeInfoStore } from '../store/ZustandStore';

const AnimeInfo = ({animeId}) => {
    const { animeInfo, loading, error, fetchAnimeInfo } = useAnimeInfoStore();
    
        useEffect(() => {
            fetchAnimeInfo(animeId);
        }, [fetchAnimeInfo]);
    
        if (loading) return
        <div >
            <span className="loading loading-bars loading-xl text-warning"></span>;
        </div>
        if (error) return <div>Error: {error}</div>;
  return (
    <div>AnimeInfo {animeInfo.title}
    <img src={animeInfo.image} alt="" /></div>
  )
}

export default AnimeInfo