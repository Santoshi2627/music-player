// // import { createContext, useRef, useState,useContext } from "react";
// // import { Telugu } from "../songsdata/telugualbum";

// // export const PlayerContext = createContext();

// // const PlayerProvider = (props) => {
// //   const [track, setTrack] = useState(Telugu[0]);
// //   const audioRef = useRef(null);
// //   const [playlist, setPlaylist] = useState([]);
// //   const previous = () => {
// //     if (track.id > 0) {
// //       setTrack(Telugu[track.id - 1]);
// //     }
// //   };

// //   const next = () => {
// //     if (track.id < Telugu.length - 1) {
// //       setTrack(Telugu[track.id + 1]);
// //     }
// //   };

// //   const playWithId = (id) => {
// //     setTrack(Telugu[id]); // Set the song with the given id without playing it
// //   };

// //  

// //   const contextValue = {
// //     track,
// //     playWithId,
// //     setTrack,
// //     playCurrentTrack, // Add playCurrentTrack to context
// //     previous,
// //     next,
// //     audioRef,
// //     playlist, setPlaylist,addToPlaylist
// //   };

// //   return (
// //     <PlayerContext.Provider value={contextValue}>
// //       {props.children}
// //     </PlayerContext.Provider>
// //   );
// // };

// // // export default PlayerProvider;
// // export const usePlaylist = () => useContext(PlayerProvider);
// import { createContext, useContext, useState, useRef } from 'react';
// import { Telugu } from '../songsdata/telugualbum';

// export const PlayerContext = createContext();

// const PlayerProvider = (props) => {
//   const [track, setTrack] = useState(Telugu[0]);
//   const audioRef = useRef(null);
//   const [playlist, setPlaylist] = useState([]);

//   const addToPlaylist = (song) => {
//     if (!playlist.find((item) => item.id === song.id)) {
//       setPlaylist((prevPlaylist) => [...prevPlaylist, song]);
//     }
//   };
//   const playWithId = (id) => {
//         setTrack(Telugu[id]); // Set the song with the given id without playing it
//       };
//       const previous = () => {
//             if (track.id > 0) {
//               setTrack(Telugu[track.id - 1]);
//             }
//           };
        
//           const next = () => {
//             if (track.id < Telugu.length - 1) {
//               setTrack(Telugu[track.id + 1]);
//             }
//           };

//   const contextValue = {
//     track,
//     setTrack,
//     playlist,
//     setPlaylist,
//     addToPlaylist,
//     audioRef,
//     playWithId,
//     previous,next,
//   };

//   return (
//     <PlayerContext.Provider value={contextValue}>
//       {props.children}
//     </PlayerContext.Provider>
//   );
// };

// export const usePlaylist = () => useContext(PlayerContext); // Export hook
// export default PlayerProvider;
import { createContext, useContext, useState, useRef } from 'react';
import { Telugu } from '../songsdata/telugualbum';

export const PlayerContext = createContext();

const PlayerProvider = (props) => {
  const [track, setTrack] = useState(Telugu[0]);
  const audioRef = useRef(null);
  const [playlist, setPlaylist] = useState([]);
  const [user, setUser] = useState(null); // State to store user details

  const addToPlaylist = (song) => {
    if (!playlist.find((item) => item.id === song.id)) {
      setPlaylist((prevPlaylist) => [...prevPlaylist, song]);
    }
  };

  const playWithId = (id) => {
    setTrack(Telugu[id]); // Set the song with the given id without playing it
  };

  const previous = () => {
    if (track.id > 0) {
      setTrack(Telugu[track.id - 1]);
    }
  };

  const next = () => {
    if (track.id < Telugu.length - 1) {
      setTrack(Telugu[track.id + 1]);
    }
  };

  const contextValue = {
    track,
    setTrack,
    playlist,
    setPlaylist,
    addToPlaylist,
    audioRef,
    playWithId,
    previous,
    next,
    user, // Expose user data
    setUser, // Expose function to set user data
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlayerContext); // Export hook
export default PlayerProvider;
