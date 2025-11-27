import React, { useEffect } from 'react';
import { useSpotlightAnimeStore } from '../store/ZustandStore';

const SpotlightAni = () => {
    const { spotlightAnime, loading, error, fetchSpotlightAnime } = useSpotlightAnimeStore();

    useEffect(() => {
        fetchSpotlightAnime();
    }, [fetchSpotlightAnime]);

    if (loading) return
    <div >
        <span className="loading loading-bars loading-xl text-warning"></span>;
    </div>
    if (error) return <div>Error: {error}</div>;


    return (
        <div className="">
            <h2 className='font-game'>Top Anime</h2>
            <div className="carousel rounded-box">
                {spotlightAnime.map((anime) => (
                    <div className="carousel-item h-56">
                        <img
                            src={anime.image}
                            alt="Burger" />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default SpotlightAni