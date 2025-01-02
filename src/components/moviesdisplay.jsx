import React from "react";
import { useParams } from "react-router-dom";
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
  "2":KannadaMovies,
  "3":TamilMovies,
  "4":EnglishMovies,

};

const Movies = () => {
  const { id } = useParams();
  console.log("Album ID:", id);  // Ensure the ID is correct
  
  const moviesList = AlbumData[Number(id)];  // Get the movies based on ID
  console.log("Movies Data:", moviesList);  // Log the movies to check the data
  
  if (!moviesList) {
    return <div>Album not found</div>;  // Handle case where no album data exists
  }

  return (
    <div>
        <Navbar/>
      <h1 className="my-5 font-bold text-2xl"></h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {moviesList.map((movie) => (
            // console.log(movie);
          <div key={movie.id} className="p-4">
            <img src={movie.image} alt={movie.movie} className="rounded h-[90%] cursor-pointer" />
            <h1 className="text-white font-bold text-xl ml-5">{movie.movie}</h1>
            <p className="text-white text-sm bold ml-5">{movie.hero}</p>
            <p className="font-light text-xs ml-5">{movie.director}</p>
            <p className="font-light text-xs ml-5">{movie.heroine}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
