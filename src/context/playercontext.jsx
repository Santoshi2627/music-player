import { createContext, useRef, useState } from "react";
import { Telugu } from "../songsdata/telugualbum";

export const PlayerContext = createContext();

const PlayerProvider = (props) => {
  const [track, setTrack] = useState(Telugu[0]);
  const audioRef = useRef(null);

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

  const playWithId = (id) => {
    setTrack(Telugu[id]); // Set the song with the given id without playing it
  };

  const playCurrentTrack = async () => {
    await audioRef.current.play(); // Play the currently selected track
  };

  const contextValue = {
    track,
    playWithId,
    setTrack,
    playCurrentTrack, // Add playCurrentTrack to context
    previous,
    next,
    audioRef,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
