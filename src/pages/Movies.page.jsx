import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar.component";
import Footer from "./components/Footer.component";

function Movies() {
    const { searchString } = useParams();
    let [searchResults, setSearchResults] = useState([]);

    useEffect(function () {
        axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=ee61aca8288bec54accdffecc3752e52&page=1&query=${searchString}`
            )
            .then(function (responce) {
                setSearchResults(responce.data.results);
            })
            .catch(function (err) {
                console.log("err : " + err);
            });
    });

    return (
        <div>
            {/* NAVBAR */}
            <Navbar />

            {/* SEARCH RESULT */}
            <section>
                <div className="w-[80%] mx-auto mt-10">
                    <h1 className="text-xl font-bold">Search Result</h1>
                    <div className="pl-10 mt-5">
                        {searchResults.map(function (movie, index) {
                            return (
                                <div key={index}>
                                    <NavLink
                                        className={``}
                                        to={`/movie/${movie.id}`}
                                    >
                                        <div className="flex items-center mt-5 ">
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                alt="poster"
                                                className="w-12 h-16 rounded"
                                            />
                                            <div className="ml-2">
                                                <h1 className="text-sm font-bold">
                                                    {movie.title}
                                                </h1>
                                                <p className="text-sm text-gray-500">
                                                    {movie.release_date}
                                                </p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}

export default Movies;
