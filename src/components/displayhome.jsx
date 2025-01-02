import React from "react";
import {Navbar} from "./navbar"
import { Albums} from "../songsdata/albums";
import AlbumItem from "./albumitem";
// import { TeluguMovies } from "../songsdata/moviesdata/telugumovies";
// import {Telugu} from "../songsdata/telugualbum" 
// import SongItem from "./songitem";
import HomepageSongs from "./homepagesongs";
// import DisplayAlbum from "./displayalbum";
// import Movies from "./moviesdisplay";
function DisplayHome(){
    return(
        <div>
         <Navbar/>
         {/* <DisplayAlbum/> */}
         
         <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Featured charts</h1>
            <div className="flex overflow-auto">
            {Albums.map((AlbumsItem,index)=>{
             return(<AlbumItem key={index} title={AlbumsItem.title} id={AlbumsItem.id} image={AlbumsItem.image} desc={AlbumsItem.description} year={AlbumsItem.year}/>)
            })}
            </div>
         </div>
         <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Today's biggest Hits</h1>
            {/* <div className="flex overflow-auto">
             {Telugu.map((telugusongs,index)=>{
               return (<SongItem key={index} name={telugusongs.title} desc={telugusongs.description} id={telugusongs.id} image={telugusongs.image}/>)
             })}
            </div> */}
            <div className="flex overflow-auto">
             <HomepageSongs/>
            </div>
            </div>
        </div>
        
    )
}
export default DisplayHome;