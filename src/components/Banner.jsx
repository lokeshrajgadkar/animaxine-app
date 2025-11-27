import React, { useEffect, useRef } from 'react'
import { useSpotlightAnimeStore } from '../store/ZustandStore';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';


const Banner = () => {
    const { spotlightAnime, loading, error, fetchSpotlightAnime } = useSpotlightAnimeStore();

    useEffect(() => {
        fetchSpotlightAnime();
    }, [fetchSpotlightAnime]);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    if (loading) return
    <div >
        <span className="loading loading-bars loading-xl text-warning"></span>;
    </div>
    if (error) return <div>Error: {error}</div>;


    return (
        <>
            <Swiper
                centeredSlides={true}
                // slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="h-100 w-full">
                {spotlightAnime.map((anime) => (
                    <SwiperSlide>
                        <div id={anime.id} className="w-full">
                            <img
                                src={anime.image}
                                className="object-fill w-full" />
                        </div>
                    </SwiperSlide>
                ))
                }
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            {/* <div className="carousel w-full">
                {spotlightAnime.map((anime) => (

                    <div id={anime.id} className="carousel-item w-full">
                        <img
                            src={anime.image}
                            className="w-full" />
                    </div>
                ))
                }

            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div> */}
        </>
    )

}
export default Banner