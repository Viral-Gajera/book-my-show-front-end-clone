import "../../tailwind.css";

import { useEffect, useMemo, useState } from "react";
// SWIPER.JS IMPORT
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";

function LiveEvents() {
    let [liveEvents, setLiveEvents] = useState([]);

    let imagesLink = useMemo(function () {
        return [
            "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",

            "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-1440:w-600/icc-top-live-events-collection-202512040235.png",

            "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png",

            "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png",
        ];
    }, []);

    useEffect(
        function () {
            let element = imagesLink.map(function (link, index) {
                return (
                    <SwiperSlide key={index}>
                        <NavLink>
                            <div className="overflow-hidden rounded-lg">
                                <img src={link} alt="" />
                            </div>
                        </NavLink>
                    </SwiperSlide>
                );
            });
            setLiveEvents(element);
        },
        [imagesLink],
    );

    function giveSlidesPerView() {
        if (window.innerWidth > 1024) return 4;
        else if (window.innerWidth > 768) return 3;
        else return 2;
    }

    let [slidesPerView, setSlidesPerView] = useState(giveSlidesPerView());

    window.addEventListener("resize", function () {
        setSlidesPerView(giveSlidesPerView());
    });

    return (
        <section className="live-events">
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[
                    Navigation,
                    Pagination,
                    Mousewheel,
                    Keyboard,
                    Autoplay,
                ]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                centeredSlides={false}
            >
                {liveEvents}
            </Swiper>
        </section>
    );
}

export default LiveEvents;
