import "./tailwind.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.page";
import Search from "./pages/Search.page";
import Movie from "./pages/Movie.page";
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
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/movie/:movieID" element={<Movie />} />
                    <Route path="/search/:searchString" element={<Search />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </GlobalContext.Provider>
        </section>
    );
}

export default App;
export { GlobalContext };