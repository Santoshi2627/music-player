      
// import React, { useContext, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { PlayerContext } from "../context/playercontext"; // Import the PlayerContext
// import { Navbar } from "./navbar";

// const SongDetails = () => {
//   const location = useLocation();
//   const { selectedMovie } = location.state || {};
//   const { setTrack, track } = useContext(PlayerContext); // Get setTrack and track from context
//   const [playlist, setPlaylist] = useState([]);

//   if (!selectedMovie || !selectedMovie.songs) {
//     return <div>No song details available.</div>;
//   }

//   const handleSongClick = (song) => {
//     setTrack(song); // Set the selected song in the PlayerContext
//   };

//   // Handling the next button click to go to the next song
//   const handleNextClick = () => {
//     const currentIndex = selectedMovie.songs.findIndex((s) => s.id === track.id);
//     if (currentIndex < selectedMovie.songs.length - 1) {
//       setTrack(selectedMovie.songs[currentIndex + 1]);
//     }
//   };

//   // Handling the previous button click to go to the previous song
//   const handlePreviousClick = () => {
//     const currentIndex = selectedMovie.songs.findIndex((s) => s.id === track.id);
//     if (currentIndex > 0) {
//       setTrack(selectedMovie.songs[currentIndex - 1]);
//     }
//   };

//   const handleAddPlaylist = (song) => {
//     // Check if the song is already in the playlist
//     if (!playlist.find((item) => item.id === song.id)) {
//       setPlaylist([...playlist, song]);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <center>
//         <h1 className="text-white font-bold text-2xl mt-3">{selectedMovie.movie} Songs</h1>
//       </center>
//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
//         {selectedMovie.songs.map((song) => (
//           <div
//             key={song.id} // Use song.id for a unique key
//             className="p-4 cursor-pointer  hover:bg-orange-400/20"
//             onClick={() => handleSongClick(song)}
//           >
//             <img src={song.image} alt={song.title} className="rounded h-[80%] w-[70%]" />
//             <h3 className="text-black font-bold text-lg">{song.title}</h3>
//             <p className="text-black text-sm">{song.singer || song.artist}</p>
//             <p className="font-light text-xs">{song.description}</p>
//             <button
//               className="mt-3 bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded ml-5"
//               onClick={() => handleAddPlaylist(song)} // Use song instead of movie
//             >
//               Add to Playlist
//             </button>
//           </div>
//         ))}
//       </div>
      
//       </div>
  
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
  const { setTrack, playlist, setPlaylist } = useContext(PlayerContext); // Access playlist and setPlaylist

  if (!selectedMovie || !selectedMovie.songs) {
    return <div>No song details available.</div>;
  }

  const handleSongClick = (song) => {
    setTrack(song); // Set the selected song in the PlayerContext
  };

  const handleAddPlaylist = (song) => {
    if (!playlist.find((item) => item.id === song.id)) {
      setPlaylist([...playlist, song]); // Update the playlist in context
    }
  };

  return (
    <div>
      <Navbar />
      <center>
        <h1 className="text-white font-bold text-2xl mt-3">{selectedMovie.movie} Songs</h1>
      </center>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
        {selectedMovie.songs.map((song) => (
          <div
            key={song.id}
            className="p-4 cursor-pointer hover:bg-orange-400/20"
            onClick={() => handleSongClick(song)}
          >
            <img src={song.image} alt={song.title} className="rounded h-[80%] w-[70%]" />
            <h3 className="text-black font-bold text-lg">{song.title}</h3>
            <p className="text-black text-sm">{song.singer || song.artist}</p>
            <p className="font-light text-xs">{song.description}</p>
            <button
              className="mt-3 bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded ml-5"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the handleSongClick
                handleAddPlaylist(song);
              }}
            >
              Add to Playlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongDetails;
