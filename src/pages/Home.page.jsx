import axios from "axios";
import { useEffect, useState } from "react";

// COMPONENTS
import Navbar from "./components/Navbar.component";
import HeroSlider from "./components/HeroSlider.component";
import PosterSlider from "./components/PosterSlider.component";
import LiveEvents from "./components/LiveEvents.component";
import Footer from "./components/Footer.component";

// IMAGES
import premiere from "./images/premiere.png";
import logo from "./images/book-my-show.png";

import {
    BsYoutube,
    BsPinterest,
    BsFacebook,
    BsInstagram,
    BsTwitter,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Home() {
    // let heroMoviesID = [299534, 284054, 299532, 284053];

    let [recommendedMovies, setRecommendedMovies] = useState([]);
    let [upcomingMovies, setUpcomingMovies] = useState([]);
    let [trendingMroives, setTrendingMovies] = useState([]);

    // REQUEST : RECOMMENDED MOVIES
    useEffect(function () {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/299536/recommendations?api_key=ee61aca8288bec54accdffecc3752e52&language=en-US`
            )
            .then(function (responce) {
                setRecommendedMovies(responce.data.results);
            })
            .catch(function (err) {
                console.log("err : " + err);
            });
    }, []);

    // REQUEST : UPCOMING MOVIES
    useEffect(function () {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=ee61aca8288bec54accdffecc3752e52&language=en-US&page=1`
            )
            .then(function (responce) {
                // console.log(responce.data.results)
                setUpcomingMovies(responce.data.results);
            })
            .catch(function (err) {
                console.log("err : " + err);
            });
    }, []);

    // TRENDING MOVIES
    useEffect(function () {
        axios
            .get(
                `https://api.themoviedb.org/3/trending/all/day?api_key=ee61aca8288bec54accdffecc3752e52`
            )
            .then(function (responce) {
                // console.log(responce.data.results)
                setTrendingMovies(responce.data.results);
            })
            .catch(function (err) {
                console.log("err : " + err);
            });
    }, []);

    return (
        <section>
            {/* NAVIGATION BAR */}
            <Navbar />

            {/* HERO CAROUSAL */}
            <HeroSlider />

            {/* TRENDING MOVIES */}
            <section>
                <div className="w-[80%] mx-auto mt-20 ">
                    <h1 className="mb-3 text-2xl font-bold text-secondary">
                        Trending Movies
                    </h1>
                    <PosterSlider data={trendingMroives} text={"black"} />
                </div>
            </section>

            {/* ENTERTAINMENT CARD */}
            <section>
                <NavLink>
                    <div className="w-[80%] h-auto mx-auto my-10">
                        <img
                            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
                            alt=""
                        />
                    </div>
                </NavLink>
            </section>

            {/* LIVE EVENTS */}
            <section>
                <div className="w-[80%] mx-auto mt-20 ">
                    <h1 className="mb-3 text-2xl font-bold text-secondary">
                        The Best of Live Events
                    </h1>
                    <LiveEvents />
                </div>
            </section>

            {/* PREMIRER SECTION */}
            <section className="py-10 my-20 bg-secondary">
                <div className="w-[80%] mx-auto mb-5">
                    <img src={premiere} alt="" />
                </div>
                <div className="w-[80%] mx-auto">
                    <h1 className="-mb-1 text-2xl font-bold text-white ">
                        PREMIERE
                    </h1>
                    <h6 className="mb-3 text-white">
                        Brand new release every Firday
                    </h6>
                    <PosterSlider data={upcomingMovies} text={"white"} />
                </div>
            </section>

            {/* RECOMMANDED MOVIES */}
            <section>
                <div className="w-[80%] mx-auto mt-8 ">
                    <h1 className="mb-3 text-2xl font-bold text-secondary">
                        Recommanded Movies
                    </h1>
                    <PosterSlider data={recommendedMovies} text={"black"} />
                </div>
            </section>

            {/* FOOTER */}
            <section>
                <Footer />
            </section>
        </section>
    );
}

export default Home;
