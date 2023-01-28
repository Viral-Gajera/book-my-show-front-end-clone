import "../../tailwind.css";

// IMPORT IMAGES
import logo from "../images/book-my-show.png";

import {
    BsYoutube,
    BsPinterest,
    BsFacebook,
    BsInstagram,
    BsTwitter,
} from "react-icons/bs";

function Footer() {
    return (
        <div className="mt-20 bg-primary">
            <div className="flex items-center justify-center p-10">
                <div className="w-full  bg-white h-[1px]"></div>
                <div className="m-3">
                    <img src={logo} alt="" className="w-[200px] " />
                </div>
                <div className="w-full bg-white h-[1px]"></div>
            </div>
            <div className="flex items-center justify-center gap-7">
                <BsFacebook color="white" size={30} />
                <BsYoutube color="white" size={30} />
                <BsPinterest color="white" size={30} />
                <BsInstagram color="white" size={30} />
                <BsTwitter color="white" size={30} />
            </div>
            <div className="p-10 text-xs text-center text-white">
                Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights
                Reserved.
                <br />
                The content and images used on this site are copyright protected
                and copyrights vests with the respective owners. The usage of
                the content and images on this website is intended to promote
                the works and no endorsement of the artist shall be implied.
                Unauthorized use is prohibited and punishable by law.
            </div>
        </div>
    );
}

export default Footer;
