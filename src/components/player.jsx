import React, { useContext } from "react";
// import { ReactComponent as MiniplayerIcon } from './icons/miniplayer.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShuffle,
  faBackward,
  faPlay,
  faForward,
  faInfinity,
  faPause,
  faMicrophone,
  faVolumeHigh,
  faBars,
  faLayerGroup,
  faRepeat,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";
import { PlayerContext } from "../context/playercontext";
// import { Telugu } from "../songsdata/telugualbum";
const Player = () => {
  const { track, seekBar, seekBg, playStatus, play, pause, time ,previous,next} =
    useContext(PlayerContext);
  //  we will link this reference variable by using ref in div line no.48 and also we are getting the play and pause function
  return (
    <div className="h-[12%] bg-white flex  justify-between items-center text-black">
      <div className="lg:flex items-center gap-4">
        <img className=" w-12" src={track.image} alt={track.title} />
        <div>
          <p className="hidden lg:flex font-bold text-lg">{track.movie}</p>
          <p className="hidden lg:flex font-semibold">{track.title}</p>
          <p className="hidden lg:flex">{track.description}</p>
          <p></p>
        </div>
      </div>
      <div className="lg:flex flex-col items-center gap-1 m-auto md:flex md:justify-center md:items-center">
        <div className="flex gap-4">
          <FontAwesomeIcon icon={faShuffle} />
          <FontAwesomeIcon icon={faBackward} onClick={previous}/>
          {/* <FontAwesomeIcon icon={faPlay} onClick={play}/> */}
          {playStatus ? (
            <FontAwesomeIcon icon={faPause} onClick={pause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} onClick={play} />
          )}
          {/* <FontAwesomeIcon icon={faPause} onClick={pause}/> */}
          <FontAwesomeIcon icon={faForward} onClick={next} />
          <FontAwesomeIcon icon={faInfinity} />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-gray-800 rounded-full"
            />
            {/* in this hr tag we can change width according to this width this hr tag will fill the line full half like that */}
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <FontAwesomeIcon icon={faPause} />
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faVolumeHigh} />
        <div className="w-20 bg-slate-200 h-1 rounded"></div>
        <FontAwesomeIcon icon={faLayerGroup} />
        <FontAwesomeIcon icon={faRepeat} />
        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
      </div>
    </div>
  );
};
export default Player;
