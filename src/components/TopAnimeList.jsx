import React, { useEffect, useState } from 'react';
import { useAnimeStore } from '../store/ZustandStore';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from '@tanstack/react-router';


function TopAnimeList() {
    const [animeId, setAnimeId] = useState("");
    const navigate = useNavigate();
    const { topAnime, loading, error, fetchTopAnime } = useAnimeStore();

    useEffect(() => {
        fetchTopAnime(animeId);
    }, [animeId, fetchTopAnime]);

    if (loading) return
    <div >
        <span className="loading loading-bars loading-xl text-warning"></span>;
    </div>
    if (error) return <div>Error: {error}</div>;

    const getAnimeDetailPage = (animeId) => {
        navigate({
            to: '/anime/$animeId',
            params: { animeId: String(animeId) },
        })
    }

    return (

        <Swiper
            slidesPerView={6}
            spaceBetween={30}
            loop={true}
            pagination={{
                type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="my-5 p-5"
        >
            {topAnime.map((anime) => (
                <SwiperSlide>
                    <div onClick={() => getAnimeDetailPage(anime.id)} className="hover:cursor-pointer 
                    flex flex-col justify-center items-center h-full">
                        <div className='h-72'>
                            <img
                                src={anime.image}
                                alt="Burger" />
                        </div>
                        <div className="tooltip hover:tooltip-open tooltip-top" data-tip={anime.title}>
                            <p className='line-clamp-2'>{anime.title}</p>
                        </div>
                        
                    </div></SwiperSlide>
            ))
            }
        </Swiper>

        // <div className="">
        //     <h2 className='font-game'>Top Anime</h2>
        //     <div className="carousel rounded-box">
        //         {topAnime.map((anime) => (
        //             <div className="carousel-item h-56">
        //                 <img
        //                     src={anime.image}
        //                     alt="Burger" />
        //             </div>
        //         ))
        //         }
        //     </div>
        // </div>
        // <div>
        //     <h2>Top Anime</h2>
        //     <div className='flex flex-col gap-3'>
        //         {topAnime.map((anime) => (
        //             <li key={anime.mal_id}>
        //                 {/* <div className='w-60'>
        //                     <img
        //                         src={anime.images.webp.large_image_url}
        //                         className="w-full" />
        //                         <a href={anime.url} target="_blank" rel="noopener noreferrer">
        //                         {anime.title} (Score: {anime.score})
        //                     </a>
        //                 </div> */}
        //                 <Carousel topAnime={topAnime} anime={anime}/>

        //             </li>
        //         ))}
        //     </div >
        // </div>
    );
}

export default TopAnimeList;
