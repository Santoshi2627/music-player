import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { PlayerContext } from "../context/playercontext";

const Player = () => {
  const { track, previous, next } = useContext(PlayerContext);

  return (
    <div className="h-[12%] bg-white flex  justify-evenly items-center text-black sm:flex-row">
      <div className="lg:flex items-center gap-2 ">
        <img className="hidden sm:block w-20" src={track.image} alt={track.title} />
        <div>
          <p className="lg:flex font-bold text-lg ">{track.movie}</p>
          <p className="lg:flex font-semibold">{track.title}</p>
        </div>
      </div>
      <div className="lg:flex flex-col items-center ">
        <div className="flex gap-4">
          <FontAwesomeIcon icon={faBackward} onClick={previous} className="mt-5" />
          <audio src={track.audio} controls />
          <FontAwesomeIcon icon={faForward} onClick={next} className="mt-5 text-black cursor-pointer hover:text-gray-600"/>
        </div>
      </div>
    </div>
  );
};

export default Player;
