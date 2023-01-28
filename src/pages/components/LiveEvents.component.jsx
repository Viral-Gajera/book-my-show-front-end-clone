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
            "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/stay-fit-collection-202211140440.png",

            "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",

            "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png",

            "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/theatre-shows-collection-202211140440.png",

            "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png",

            "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png",

            "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/dance-classes-collection-202211140440.png",
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
        [imagesLink]
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
