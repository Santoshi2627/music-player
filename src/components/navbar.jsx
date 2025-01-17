import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export const Navbar=()=>{
    const navigate=useNavigate()
    return(
        <>
        <div className="w-full flex justify-between items-center font-semibold text-white">
            <div className="flex items-center  gap-2 ">
                <FontAwesomeIcon onClick={()=>{navigate(-1)}}icon={faArrowLeft} className="w-5 bg-orange-500 p-2 rounded-2xl  cursor-pointer" />
                <FontAwesomeIcon onClick={()=>{navigate(+1)}}icon={faArrowRight} className="w-5 bg-orange-500 p-2 rounded-2xl cursor-pointer"/>
            </div>
            <div className="flex items-center gap-4">
                <p className="bg-orange-400 text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block">Explore Premium</p>
                {/* <p className="bg-black py-1 px-3 rounded-2xl text-[15px]">install app</p> */}
                <p className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center">S</p>
           
            </div>
        </div>
        <div className="flex items-center gap-3 mt-4 sticky top-4">
            <p className="bg-orange-400 text-white px-4 py-1 rounded-2xl cursor-pointer" id="nav1"><a href="#albums">All</a></p>
            <p className="bg-orange-400 text-white px-4 py-1 rounded-2xl cursor-pointer" id="nav2"><a href="#navitems">Music</a></p>
            {/* <p className="bg-orange-400 text-white px-4 py-1 rounded-2xl cursor-pointer">Podcast</p> */}

        </div>
        </>
    )
}