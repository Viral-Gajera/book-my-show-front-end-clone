// Import Swiper components and Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../tailwind.css";
import { useEffect, useMemo, useState } from "react";

function HeroSlider() {
    let [movies, setMovies] = useState([]);

    let imagesLink = useMemo(function () {
        return (
            [
                "https://assets-in.bmscdn.com/promotions/cms/creatives/1672137034486_ritvizweb.jpg",
                "https://assets-in.bmscdn.com/promotions/cms/creatives/1674640211828_freeweb.jpg",
                "https://assets-in.bmscdn.com/promotions/cms/creatives/1674205067860_harshrajkotweb.jpg",
                "https://assets-in.bmscdn.com/promotions/cms/creatives/1674652877937_myweb.jpg",
                "https://assets-in.bmscdn.com/promotions/cms/creatives/1670502578966_web.jpg",
                "https://assets-in.bmscdn.com/promotions/cms/creatives/1674652847610_offerweb.jpg"
            ]
        );
    },[]);

    useEffect(function () {
        let moivesElement = imagesLink.map(function (link, index) {
            return (<SwiperSlide key={index}>
                <img
                    src={link}
                    alt=""
                />
            </SwiperSlide> );
        });
        setMovies(moivesElement);
    }, [imagesLink]);

    return (
        <section className="my-2">
            <div className="hero w-[99%] mx-auto rounded-md overflow-hidden">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    cssMode={true}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[
                        Navigation,
                        Pagination,
                        Mousewheel,
                        Keyboard,
                        Autoplay,
                    ]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                >
                    {movies}
                </Swiper>
            </div>
        </section>
    );
}

export default HeroSlider;
