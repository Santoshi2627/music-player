import React, { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../context/playercontext";
import { Telugu } from "../songsdata/telugualbum";  // Import your song data

// Utility function to shuffle an array
const shuffleArray = (array) => {
  return array
    .map((item) => ({ ...item, sortKey: Math.random() })) // Add random sort key
    .sort((a, b) => a.sortKey - b.sortKey) // Sort based on the random key
    .map(({ sortKey, ...item }) => item); // Remove the sort key
};

const HomepageSongs = () => {
  const { playwithId } = useContext(PlayerContext);
  const [randomSongs, setRandomSongs] = useState([]);

  useEffect(() => {
    // Shuffle the songs once when the component mounts
    const shuffledSongs = shuffleArray(Telugu).slice(0, 10); // Only pick the first 5 songs
    setRandomSongs(shuffledSongs);
  }, []); // Empty dependency array ensures this runs only once on mount

  console.log(randomSongs); // Log to check if songs are shuffled correctly

  return (
    <div className="p-5">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {randomSongs.map((song) => (
          <div
            key={song.id} // Use song.id for the key
            onClick={() => playwithId(song.id)} // Ensure playwithId is working
            className="cursor-pointer  p-3  transition  hover:bg-[#ffffff26]"
          >
            <img
              src={song.image}
              alt={song.title}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">{song.title}</h3>
            <p className="text-lg text-gray-200">{song.movie}</p>
            <p className="text-sm text-gray-500">{song.artist}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageSongs;
