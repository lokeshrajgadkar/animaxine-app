import React, { useEffect } from 'react';
import { useAnimeStore } from '../store/ZustandStore';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';


function TopAnimeList() {
    const { topAnime, loading, error, fetchTopAnime } = useAnimeStore();

    useEffect(() => {
        fetchTopAnime();
    }, [fetchTopAnime]);

    if (loading) return
    <div >
        <span className="loading loading-bars loading-xl text-warning"></span>;
    </div>
    if (error) return <div>Error: {error}</div>;

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
            className="py-11"
        >
            {topAnime.map((anime) => (
                <SwiperSlide><div className="flex flex-col h-full">
                    <img
                        src={anime.image}
                        alt="Burger" />
                        <p>{anime.title}</p>
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
