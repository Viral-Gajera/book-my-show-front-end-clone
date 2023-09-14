import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

// SWIPER.JS IMPORT
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";

function PosterSlider(props) {
    function Responsive() {
        if (window.innerWidth < 640) {
            return arguments[0];
        } else if (window.innerWidth < 768) {
            return arguments[1];
        } else if (window.innerWidth < 1024) {
            return arguments[2];
        } else if (window.innerWidth < 1280) {
            return arguments[3];
        } else if (window.innerWidth < 1536) {
            return arguments[4];
        } else {
            return arguments[5];
        }
    }

    let [characterLimit, setCharacterLimit] = useState(
        Responsive(13, 15, 17, 19, 21, 23)
    );
    let [slidesPerView, setSlidesPerView] = useState(
        Responsive(3, 3, 3, 4, 5, 5)
    );

    window.addEventListener("resize", function () {
        setCharacterLimit(Responsive(10, 15, 20, 25, 30, 35));
    });

    window.addEventListener("resize", function () {
        setSlidesPerView(Responsive(3, 3, 3, 4, 5, 5));
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
                    if (element.backdrop_path && element.title) {
                        return (
                            <SwiperSlide
                                className="bg-transparent "
                                key={index}
                                onClick={() => {
                                    props?.setMovieID(element.id);
                                }}
                            >
                                <NavLink
                                    className={
                                        "flex flex-col items-start justify-start"
                                    }
                                    to={`/movie/${element.id}`}
                                >
                                    <div className="">
                                        <div className="h-[30vw] max-h-[300px] w-full rounded-t-xl overflow-hidden">
                                            <img
                                                src={`https://image.tmdb.org/t/p/original${element.backdrop_path}`}
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
                                            {element.title.length >
                                            characterLimit
                                                ? element.title.substring(
                                                      0,
                                                      characterLimit
                                                  ) + "..."
                                                : element.title}
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                        );
                    }
                })}
            </Swiper>
        </section>
    );
}

export default PosterSlider;
