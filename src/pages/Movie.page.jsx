import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";

import Navbar from "./components/Navbar.component";
import PosterSlider from "./components/PosterSlider.component";
import Footer from "./components/Footer.component";

// IMMAGES AND ICONS
import { AiFillStar } from "react-icons/ai";

function Movie() {
    let [ movieID, setMovieID ] = useState(useParams().movieID);

    useEffect(function(){
        console.log("movie ID changed");
    },[movieID]);

    let [movieDetail, setMovieDetail] = useState({
        genres: [],
        backdrop_path: "",
    });
    let [similarMovies, setSimilarMovies] = useState([]);

    useEffect(function () {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${movieID}?api_key=ee61aca8288bec54accdffecc3752e52&language=en-US`
            )
            .then(function (responce) {
                setMovieDetail(responce.data);
            })
            .catch(function (err) {
                console.log(err);
            });
    }, [movieID]);

    useEffect(function () {
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=ee61aca8288bec54accdffecc3752e52&language=en-US`)
            .then(function (responce) {
                setSimilarMovies(responce.data.results);
            })
            .catch(function (err) {
                console.log(err);
            });
    }, [movieID]);


    return (
        <div>
            {/* NAVIGATION BAR */}
            <Navbar />

            {/* DETAILS */}
            <section>
                <div className="relative flex items-center justify-center overflow-hidden">
                    <div
                        className={`absolute z-10 bg-cover bg-center w-full h-full`}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
                            alt=""
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="absolute z-20 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
                    <div className="w-[80%] z-30 h-full flex flex-col md:flex-row items-center gap-5 py-10">
                        <div className="flex items-center justify-center p-1 m-1 ">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
                                alt=""
                                className="w-[300px] h-[450px] object-cover rounded-lg shadow-lg shadow-black border border-gray-500"
                            />
                        </div>
                        <div className="flex flex-col items-center p-1 m-1 text-white md:items-start">
                            <div className="mb-8 text-2xl font-bold">
                                {movieDetail.original_title}
                            </div>
                            <div className="flex items-center gap-3">
                                <AiFillStar
                                    size={"30px"}
                                    color={"rgb(248,113,113)"}
                                />
                                <span className="text-2xl font-bold">
                                    {Number(movieDetail.vote_average).toFixed(
                                        1
                                    )}
                                    /10
                                </span>
                                <span className="text-[12px] pt-2">
                                    {movieDetail.vote_count} votes
                                </span>
                            </div>
                            <div className="px-3 py-1 mt-2 text-black bg-white rounded">
                                {Number(movieDetail.runtime / 60).toFixed(0)}h{" "}
                                {movieDetail.runtime % 60}m •{" "}
                                {movieDetail.genres.map(function (element) {
                                    return element.name + " ";
                                })}
                            </div>
                            <div className="py-2 mt-8 font-bold bg-red-400 rounded ">
                                <NavLink className={"px-10 py-2"}>
                                    Book Tickets
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ABOUT THE MOVIE */}
                <div className="mt-10">
                    <div className="w-[95%] md:w-[80%] mx-auto">
                        <h1 className="my-2 text-2xl font-bold">
                            About the movie
                        </h1>
                        <p className="text-justify" >{movieDetail.overview}</p>
                    </div>
                </div>

                {/* RECOMMANDED MOVIES */}
                <div className="mt-10">
                    <div className="w-[95%] md:w-[80%] mx-auto">
                        <h1 className="my-3 text-2xl font-bold">
                            Recommended Movies
                        </h1>
                        <PosterSlider data={similarMovies} setMovieID={setMovieID} />
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}

export default Movie;
