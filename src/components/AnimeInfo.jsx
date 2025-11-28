import React, { useEffect } from 'react'
import { useAnimeInfoStore } from '../store/ZustandStore';
import ImageCard from './ImageCard';
import EpisodesList from './EpisodesList';

const AnimeInfo = ({ animeId }) => {
  const { animeInfo, loading, error, genres, episodes, fetchAnimeInfo } = useAnimeInfoStore();

  useEffect(() => {
    fetchAnimeInfo(animeId);
  }, [fetchAnimeInfo]);

  if (loading) return
  <div >
    <span className="loading loading-bars loading-xl text-warning"></span>;
  </div>
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='p-5'>
      <div className="hero bg-base-200 min-h-12 p-3">
        <div className="hero-content flex-col lg:flex-row">
          <ImageCard animeTitle={animeInfo?.title} animeImg={animeInfo?.image} />
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          /> */}
          <div className='flex flex-col gap-3'>

            <h1 className="text-5xl font-bold">{animeInfo?.title}</h1>
            <p className="py-6 w-2xl opacity-80 line-clamp-2">
              {animeInfo?.description}
            </p>
            
            <div className='flex flex-row gap-3'>
              <div className="badge badge-soft badge-secondary">{animeInfo?.type}</div>
              <div className="badge badge-outline badge-warning">Total Episodes: {animeInfo?.total_episodes}</div>
            </div>

            
            <div className='flex flex-row gap-3'>
              <div className="badge badge-soft badge-warning">{animeInfo?.status}</div>
              <div className="badge badge-error">Aired: {animeInfo?.aired}</div>
            </div>

            <div className='flex flex-row gap-3'>
              {genres?.map((genre) => (
                  <div className="badge badge-outline badge-info">{genre}</div>
              ))}
              
            </div>

            <button className="btn btn-outline btn-success">Watch Now</button>
            <div className="divider divider-warning"></div>

            <div className='flex flex-col gap-3'>
              <EpisodesList animeInfo={animeInfo} episodes={episodes} />
            </div>
          </div>
        </div>
      </div>



      {/* <img src={animeInfo.image} alt="" /> */}
    </div>
  )
}

export default AnimeInfo