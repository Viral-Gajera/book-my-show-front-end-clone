import "../../tailwind.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";

import logo from "../images/book-my-show.png";
import search from "../images/search.png";
import menu from "../images/menu.png";
import user from "../images/user.png";
import down from "../images/down.png";

function Navbar() {
    let [sideBarState, setSideBarState] = useState(false);
    let [loginState, setLoginState] = useState(false);
    
    const location = useLocation();
    let navLinks = [
        // { name: "Movies", link: "/movies" },
        // { name: "Plays", link: "/plays" },
        { name: "Stream", link: "/stream" },
        { name: "Events", link: "/events" },
        { name: "Sports", link: "/sports" },
        { name: "Activities", link: "/activities" },
        { name: "Buzz", link: "/buzz" },
        { name: "Rewards", link: "/rewards" },
        { name: "Lists", link: "/list" },
        { name: "Gift Cards", link: "/gift" }
    ]

    let [searchString, setSearchString] = useState("");
    const navigate = useNavigate();

    return (
        <>
            {/* UPPER SECTION */}
            <section className="bg-primary h-[60px]">
                {/* SUB CONTAINER */}
                <div className="w-[80%] h-full mx-auto flex justify-center">
                    {/* LEFT SECTION */}
                    <div className="flex items-center justify-start w-full h-full ">
                        <NavLink to="/home" className={''} >
                            <img src={logo} className="w-[130px]" alt="" />
                        </NavLink>

                        <div className="flex items-center justify-start w-full p-1 ml-5 bg-white rounded">
                            <img
                                src={search}
                                className="w-[20px] h-[20px] mx-2"
                                alt=""
                            />
                            <input
                                type="text"
                                className="w-full align-middle outline-none "
                                placeholder="Search Movies, Events, Sports and Activities"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        console.log(searchString);
                                        navigate(`/movies/${searchString}`, { state: { searchString } })
                                    }
                                }}

                                value={searchString}
                                onChange={ (e) => setSearchString(e.target.value) }
                            />
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="flex items-center justify-end h-full lg:w-full">
                        <div className="items-center justify-end hidden h-full lg:flex">
                            {loginState ? (
                                <>
                                    <span className="flex cursor-pointer">
                                        <span className="text-white ">
                                            Rajkot
                                        </span>
                                        <img
                                            src={down}
                                            className="w-[15px] pt-1 ml-2"
                                            alt=""
                                        />
                                    </span>
                                    <span
                                        className="w-[40px] h-[40px] rounded-full bg-white ml-5 cursor-pointer"
                                        onClick={() => setSideBarState(true)}
                                    >
                                        <img src={user} alt="" />
                                    </span>
                                </>
                            ) : (
                                <span
                                    className="px-3 py-1 font-bold text-white rounded cursor-pointer bg-tertiary"
                                    onClick={() => setLoginState(true)}
                                >
                                    {" "}
                                    Login{" "}
                                </span>
                            )}
                        </div>
                        <div className="block lg:hidden">
                            <img
                                src={menu}
                                className="w-[30px] ml-5"
                                alt=""
                                onClick={() => setSideBarState(true)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* LOWER SECTION */}
            <section className="bg-secondary">
                <div className="w-[80%] mx-auto text-gray-200 flex justify-start items-center gap-5 h-full flex-wrap py-2">
                    {
                        navLinks.map( (element, index) => {
                            if( location.pathname === element.link ){
                                return (
                                    <NavLink to={element.link} className={`hover:text-gray-400 text-white`} key={index}>
                                        {element.name}
                                    </NavLink>
                                )
                            }
                            else{
                                return (
                                    <NavLink to={element.link} className={`hover:text-gray-400 text-gray-400`} key={index}>
                                        {element.name}
                                    </NavLink>
                                )
                            }
                        } )
                    }
                </div>
            </section>

            {/* SIDE BAR */}
            {sideBarState && (
                <section>
                    {/* BLUR EFFICT */}
                    <div
                        className="fixed top-0 left-0 z-10 w-full h-full bg-[rgba(0,0,0,0.1)] backdrop-blur-[1px]"
                        onClick={() => setSideBarState(false)}
                    ></div>

                    {/* SIDE BAR */}
                    <div className="bg-white fixed top-0 right-0 w-[400px] h-full z-20">
                        <div className="w-full h-[60px] bg-primary flex justify-between items-center">
                            <div className="px-3 text-white"></div>
                            <div className="px-3">
                                {loginState ? (
                                    <div className="w-[40px] h-[40px] bg-white rounded-full">
                                        <img src={user} alt="" />
                                    </div>
                                ) : (
                                    <span
                                        className="px-3 py-1 font-bold text-white bg-red-400 rounded cursor-pointer"
                                        onClick={() => setLoginState(true)}
                                    >
                                        {" "}
                                        Login{" "}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="cursor-pointer absolute bottom-0 w-full h-[60px] border shadow-[0px_-2px_2px_0px_rgba(0,0,0,0.1)] p-2">
                            <div
                                onClick={() => setLoginState(false)}
                                className="flex items-center justify-center h-full font-bold border-2 rounded border-tertiary text-tertiary"
                            >
                                Sign Out
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default Navbar;
