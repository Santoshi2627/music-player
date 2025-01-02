import React, { useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-solid-svg-icons";
// import { Navbar } from "./navbar";
import { useParams } from "react-router-dom";
import {Albums} from "../songsdata/albums";
// import { Telugu } from "../songsdata/telugualbum";
// import { PlayerContext } from "../context/playercontext";
 const DisplayAlbum=()=>{
    const {id}=useParams()
    // console.log(id);
    //from Albums data we can find single album data by using id
    const albumData=Albums[id]
    // const {playwithId}=useContext(PlayerContext)
    // console.log(albumData)
    
 return(
    <>
    {/* when i click any album i want to displayNavbar as it is so i mount this navbar
    */}
    {/* <Navbar/> */}
    <div  className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumData.image} alt={albumData.title} className="h-[250px] w-[250px]"/>
        <div className="flex flex-col">
            <p>Playlist</p>
            <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.title}</h2>
            <h1 >{albumData.description}</h1>
            <p className="mt-1">
                <img  className='inline-block w-9'src="https://static.vecteezy.com/system/resources/previews/001/541/067/non_2x/music-and-sound-logo-design-vector.jpg" alt="Music symbol"/>
                <b className="text-white">Music-player</b>
                        <span className="text-gray-300">•</span>
                        1,432,345 likes
                        <span className="text-gray-300">•</span>
                        <b className="text-white">20 songs</b>
                        <span className="text-gray-300">•about 1hr 30min</span>
                        {/* about 1hr 30min */}
            </p>
        </div>
    </div>
    </>
    )
}
export default DisplayAlbum;
    