import React, { useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { PlayerContext } from "../context/playercontext";

const Player = ({ onPlayClick, isLoggedIn }) => {
  const { track, previous, next } = useContext(PlayerContext);
  const audioRef = useRef(new Audio(track.audio)); // Create a new Audio instance

  // Function to handle play button click
  const handlePlayClick = () => {
    if (!isLoggedIn) {
      audioRef.current.pause(); // Ensure audio is paused
      audioRef.current.currentTime = 0; // Reset audio to the beginning
      onPlayClick(); // Show the login form
    } else {
      audioRef.current.play(); // Play the audio if logged in
    }
  };

  // Handle audio play event
  const handleAudioPlay = () => {
    if (!isLoggedIn) {
      audioRef.current.pause(); // Pause the audio if not logged in
      audioRef.current.currentTime = 0; // Reset audio to the beginning
      onPlayClick(); // Show the login form
    }
  };

  // Ensure audio is paused if the user is not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio if logged out
    }
  }, [isLoggedIn]);

  return (
    <div className="h-[12%] bg-white flex justify-evenly items-center text-black sm:flex-row hover:scale-110 transition duration-1000">
      <div className="lg:flex items-center gap-2">
        <img className="hidden sm:block w-20" src={track.image} alt={track.title} />
        <div>
          <p className="lg:flex font-bold text-lg">{track.movie}</p>
          <p className="lg:flex font-semibold">{track.title}</p>
        </div>
      </div>
      <div className="lg:flex flex-col items-center">
        <div className="flex gap-4">
          <FontAwesomeIcon icon={faBackward} onClick={previous} className="mt-5" />
          <audio
            src={track.audio}
            controls
            ref={audioRef} // Attach the audio reference
            onPlay={handleAudioPlay} // Handle play event
          />
          <FontAwesomeIcon
            icon={faForward}
            onClick={next}
            className="mt-5 text-black cursor-pointer hover:text-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
