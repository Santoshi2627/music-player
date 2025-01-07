import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan,faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export const Navbar=()=>{
    const navigate=useNavigate()
    return(
        <>
        <div className="w-full flex justify-between items-center font-semibold">
            <div className="flex items-center gap-2 sticky top-0">
                <FontAwesomeIcon onClick={()=>{navigate(-1)}}icon={faLessThan} className="w-8 bg-black p-2 rounded-2xl cursor-pointer"/>
                <FontAwesomeIcon onClick={()=>{navigate(+1)}}icon={faGreaterThan} className="w-8 bg-black p-2 rounded-2xl cursor-pointer"/>
            </div>
            <div className="flex items-center gap-4">
                <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block">Explore Premium</p>
                {/* <p className="bg-black py-1 px-3 rounded-2xl text-[15px]">install app</p> */}
                <p className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center">S</p>
           
            </div>
        </div>
        <div className="flex items-center gap-2 mt-4 sticky top-0">
            <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer" id="nav1"><a href="#albums">All</a></p>
            <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer" id="nav2"><a href="#navitems">Music</a></p>
            <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>

        </div>
        </>
    )
}