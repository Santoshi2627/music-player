// import React, { useContext } from "react";
// import { useLocation } from "react-router-dom";
// import { PlayerContext } from "../context/playercontext"; // Import the PlayerContext
// import { Navbar } from "./navbar";

// const SongDetails = () => {
//   const location = useLocation();
//   const { selectedMovie } = location.state || {};
//   const { setTrack } = useContext(PlayerContext); // Get setTrack from context

//   if (!selectedMovie || !selectedMovie.songs) {
//     return <div>No song details available.</div>;
//   }

//   const handleSongClick = (song) => {
//     setTrack(song); // Set the selected song in the PlayerContext
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1 className="text-white font-bold text-2xl">{selectedMovie.movie} Songs</h1>
//       <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
//         {selectedMovie.songs.map((song) => (
//           <div key={song.title} className="p-4" onClick={() => handleSongClick(song)}>
//             <img src={song.image} alt={song.title} className="rounded h-[90%]" />
//             <h3 className="text-white font-bold text-lg">{song.title}</h3>
//             <p className="text-white text-sm">{song.singer || song.artist}</p>
//             <p className="font-light text-xs">{song.description}</p>
//             <p className="font-light text-xs">{song.duration}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SongDetails;
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PlayerContext } from "../context/playercontext"; // Import the PlayerContext
import { Navbar } from "./navbar";


const SongDetails = () => {
  const location = useLocation();
  const { selectedMovie } = location.state || {};
  const { setTrack, previous, next, track } = useContext(PlayerContext); // Get setTrack, previous, next, and track from context

  if (!selectedMovie || !selectedMovie.songs) {
    return <div>No song details available.</div>;
  }

  const handleSongClick = (song) => {
    setTrack(song); // Set the selected song in the PlayerContext
  };

  // Handling the next button click to go to the next song
  const handleNextClick = () => {
    if (track.id < selectedMovie.songs.length - 1) {
      setTrack(selectedMovie.songs[track.id + 1]);
    }
  };

  // Handling the previous button click to go to the previous song
  const handlePreviousClick = () => {
    if (track.id > 0) {
      setTrack(selectedMovie.songs[track.id - 1]);
    }
  };

  return (
    <div>
      <Navbar />
     <center><h1 className="text-white font-bold text-2xl mt-3">{selectedMovie.movie} Songs</h1></center>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {selectedMovie.songs.map((song) => (
          <div
            key={song.id} // Use song.id for unique key
            className="p-4 cursor-pointer"
            onClick={() => handleSongClick(song)}
          >
            <img src={song.image} alt={song.title} className="rounded h-[90%]" />
            <h3 className="text-white font-bold text-lg">{song.title}</h3>
            <p className="text-white text-sm">{song.singer || song.artist}</p>
            <p className="font-light text-xs">{song.description}</p>
            <p className="font-light text-xs">{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongDetails;
