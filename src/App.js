import "./tailwind.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.page";
import Movies from "./pages/Movies.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";
import PageNotFound from "./pages/PageNotFound.page";

import { createContext } from "react";

let GlobalContext = createContext();
let globalData = {
    tmdb : {
        baseUrl : "https://api.themoviedb.org/3/",
        baseImageUrl : "https://image.tmdb.org/t/p/original/",
        apiKey : "ee61aca8288bec54accdffecc3752e52",
    }
};

function App() {

    return (
        <section>
            <GlobalContext.Provider value={globalData}>
                <Routes>
                    <Route path="/book-my-show-front-end-clone/" element={<Home />} />
                    <Route path="/book-my-show-front-end-clone/home" element={<Home />} />
                    <Route path="/book-my-show-front-end-clone/movie/:movieID" element={<Movie />} />
                    <Route path="/book-my-show-front-end-clone/movies/:searchString" element={<Movies />} />
                    <Route path="/book-my-show-front-end-clone/plays" element={<Plays />} />
                    <Route path="/book-my-show-front-end-clone/*" element={<PageNotFound />} />
                </Routes>
            </GlobalContext.Provider>
        </section>
    );
}

export default App;
export { GlobalContext };