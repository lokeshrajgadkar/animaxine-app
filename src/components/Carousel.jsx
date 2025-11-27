import React, { useEffect } from 'react'
import { useAnimeStore } from '../store/ZustandStore';

const Carousel = () => {
    const { topAnime, loading, error, fetchTopAnime } = useAnimeStore();

    useEffect(() => {
        fetchTopAnime();
    }, [fetchTopAnime]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='flex flex-row gap-3'>
            <div className='carousel rounded-box'>
                {topAnime.map((anime) => (
                    <li key={anime.mal_id}>
                        {/* <div className='w-60'>
                                        <img
                                            src={anime.images.webp.large_image_url}
                                            className="w-full" />
                                            <a href={anime.url} target="_blank" rel="noopener noreferrer">
                                            {anime.title} (Score: {anime.score})
                                        </a>
                                    </div> */}
                        <div className="carousel-item h-50 w-60">
                            <img
                                src={anime.images.webp.large_image_url}
                                alt="Burger" />
                        </div>

                    </li>
                ))}
            </div>
        </div>

    )
}

export default Carousel