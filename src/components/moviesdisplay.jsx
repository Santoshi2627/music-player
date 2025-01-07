// import React ,{useState}from "react";
// import { useParams } from "react-router-dom";
// import { Navbar } from "./navbar";
// import { TeluguMovies } from "../songsdata/moviesdata/telugumovies"; 
// import { HindiMovies } from "../songsdata/moviesdata/hindimovies";
// import { KannadaMovies } from "../songsdata/moviesdata/kannadamovies";
// import { TamilMovies } from "../songsdata/moviesdata/tamilmovies";
// import { EnglishMovies } from "../songsdata/moviesdata/englishmovies";

// // Example AlbumData mapping
// const AlbumData = {
//   "0": TeluguMovies,
//   "1": HindiMovies,
//   "2":KannadaMovies,
//   "3":TamilMovies,
//   "4":EnglishMovies,

// };

// const Movies = () => {
//   const { id } = useParams();
//   console.log("Album ID:", id);  // Ensure the ID is correct
  
//   const moviesList = AlbumData[Number(id)];  // Get the movies based on ID
//   console.log("Movies Data:", moviesList);  // Log the movies to check the data

//   const [selectedMovie, setSelectedMovie] = useState(null);
//   if (!moviesList) {
//     return <div>Album not found</div>;  // Handle case where no album data exists
//   }
//   const handleMovieClick=(movie)=>{
//     setSelectedMovie(movie)
//   }

//   return (
//     <div>
//         <Navbar/>
//       <h1 className="my-5 font-bold text-2xl">movies album</h1>
//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
//         {moviesList.map((movie) => (
//             // console.log(movie);
//           <div key={movie.id} className="p-4">
//             <img src={movie.image} alt={movie.movie} className="rounded h-[90%] cursor-pointer"  onClick={() => handleMovieClick(movie)}/>
//             <h1 className="text-white font-bold text-xl ml-5">{movie.movie}</h1>
//             <p className="text-white text-sm bold ml-5">{movie.hero}</p>
//             <p className="font-light text-xs ml-5">{movie.director}</p>
//             <p className="font-light text-xs ml-5">{movie.heroine}</p>
//           </div>
//         ))}
//       </div>
//       {selectedMovie&&(
//         <div className="mt-5">
//           <h2 className="text-white font-bold text-xl">{selectedMovie.movie} songs</h2>
//           <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
//           {Telugu.filter(song => song.movie === selectedMovie.movie).map((song)=>())}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Movies;
import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Navbar } from "./navbar";
import { TeluguMovies } from "../songsdata/moviesdata/telugumovies"; 
import { HindiMovies } from "../songsdata/moviesdata/hindimovies";
import { KannadaMovies } from "../songsdata/moviesdata/kannadamovies";
import { TamilMovies } from "../songsdata/moviesdata/tamilmovies";
import { EnglishMovies } from "../songsdata/moviesdata/englishmovies";

// Example AlbumData mapping
const AlbumData = {
  "0": TeluguMovies,
  "1": HindiMovies,
  "2": KannadaMovies,
  "3": TamilMovies,
  "4": EnglishMovies,
};

const Movies = () => {
  const { id } = useParams();
  // console.log("Album ID:", id);
  const navigate = useNavigate();
  
  const moviesList = AlbumData[Number(id)];
  console.log("Movies Data:", moviesList);
  
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (!moviesList) {
    return <div>Album not found</div>;
  }

  const handleMovieClick = (movie) => {
   
    navigate("/song-details", { state: { selectedMovie: movie } });//naviagting the songdetails with state 
  };

  return (
    <div>
      <Navbar />
      <h1 className="my-5 font-bold text-2xl">{AlbumData.title}</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {moviesList.map((movie) => (
          <div key={movie.id} className="p-4">
            <img
              src={movie.image}
              alt={movie.movie}
              className="rounded h-[80%] cursor-pointer p-3 transition hover:bg-[#ffffff26]"
              onClick={() => handleMovieClick(movie)} // Handle click event
            />
            <h1 className="text-white font-bold text-xl ml-5">{movie.movie}</h1>
            <p className="text-white text-sm bold ml-5">{movie.hero}</p>
            <p className="font-light text-xs ml-5">{movie.director}</p>
            <p className="font-light text-xs ml-5">{movie.heroine}</p>
          </div>
        ))}
      </div>

      {/* {selectedMovie && selectedMovie.songs && (
        <div className="mt-5">
          <h2 className="text-white font-bold text-xl">{selectedMovie.movie} Songs</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {selectedMovie.songs.map((song) => (
              <div key={song.title} className="p-4">
                <img src={song.image} alt={song.title} className="rounded h-[90%]" />
                <h3 className="text-white font-bold text-lg">{song.title}</h3>
                <p className="text-white text-sm">{song.singer || song.artist}</p>
                <audio controls>
                  <source src={song.audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
                <p className="font-light text-xs">{song.description}</p>
                <p className="font-light text-xs">{song.duration}</p>
              </div>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Movies;
