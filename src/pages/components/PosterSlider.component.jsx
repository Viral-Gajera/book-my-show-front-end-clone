import "../../tailwind.css";

import { useEffect, useMemo, useState } from "react";
import { AiFillStar } from "react-icons/ai";

// SWIPER.JS IMPORT
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";

function PosterSlider(props) {

    function giveSlidesPerView() {
        if (window.innerWidth > 1024) return 5;
        else if (window.innerWidth > 768) return 4;
        else {
            return 3;
        }
    }

    let [slidesPerView, setSlidesPerView] = useState(giveSlidesPerView());

    window.addEventListener("resize", function () {
        setSlidesPerView(giveSlidesPerView());
    });

    return (
        <section className="poster">
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
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {props.data.map(function (element, index) {
                    return (
                        <SwiperSlide className="bg-transparent " key={index} onClick={()=>{props?.setMovieID(element.id)}} >
                            <NavLink
                                className={
                                    "flex flex-col items-start justify-start"
                                }
                                to={`/movie/${element.id}`}
                                
                            >
                                <div className="">
                                    <div className="h-[30vw] max-h-[300px] w-full rounded-t-xl overflow-hidden">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${element.backdrop_path ? element.backdrop_path : "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-[35px] w-full bg-black rounded-b-xl">
                                        <div className="flex items-center justify-start h-full gap-2 px-2 text-sm text-white">
                                            <AiFillStar
                                                color="#DB3349"
                                                size={20}
                                            />
                                            {Number(
                                                element.vote_average
                                            ).toFixed(1)}{" "}
                                            / 10
                                        </div>
                                    </div>
                                    <div
                                        className={`flex mt-2 text-base font-bold text-${props.text} text-start`}
                                    >
                                        {element.title}
                                    </div>
                                </div>
                            </NavLink>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}

export default PosterSlider;
