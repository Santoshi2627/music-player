import React from "react";
// import { ReactComponent as MiniplayerIcon } from './icons/miniplayer.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle,faBackward,faPlay,faForward,faInfinity,faPause,faMicrophone,faVolumeHigh,faBars,faLayerGroup,faRepeat,faMagnifyingGlassPlus} from "@fortawesome/free-solid-svg-icons";
const Player = () => {
  return (
    <div className="h-10% bg-white flex  justify-between items-center text-black">
      <div className="hidden lg:flex  items-center gap-4">
        <img
          className="w-12"
          src="https://c.saavncdn.com/411/Chuttamalle-From-Devara-Part-1-Telugu-2024-20240805181008-500x500.jpg"
          alt="chuttamalle song"
        />
        <div>
          <p>chuttamalle</p>
          <p>
            chuttamalle (From "devara part1") by anirudh ravichander,shilpa
            rao,ramajogayya Satry
          </p>
        </div>
      </div>
      <div className=" hidden lg:flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <FontAwesomeIcon icon={faShuffle} />
          <FontAwesomeIcon icon={faBackward} />
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faForward} />
          <FontAwesomeIcon icon={faInfinity} />
        </div>
        <div className="flex items-center gap-5">
            <p>1:06</p>
            <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
              <hr className="h-1 border-none w-0 bg-gray-800 rounded-full"/>
              {/* in this hr tag we can change width according to this width this hr tag will fill the line full half like that */}
            </div>
            <p>3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <FontAwesomeIcon icon={faPause} />
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faVolumeHigh} />
        <div className="w-20 bg-slate-200 h-1 rounded">
        
        </div>
        <FontAwesomeIcon icon={faLayerGroup} />
        <FontAwesomeIcon icon={faRepeat} />
        <FontAwesomeIcon icon={faMagnifyingGlassPlus}/>
      </div>
    </div>
  );
};
export default Player;
