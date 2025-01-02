import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faArrowRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
function Sidebar() {
  return (
    <div className="hidden md:block w-[25%] h-full p-2 flex-col gap-2 text-black lg:flex">
      <div className="bg-white h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <FontAwesomeIcon icon={faHouse} className="w-6" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-white h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faStackOverflow} className="w-8" />
            <p className="font-bold">Your library</p>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faArrowRight} />
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
  <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4 text-white">
    <h1>Create your 1<sup>st</sup> playlist</h1>
    <p className="font-light">It's easy, we will help you</p>
    <button className="px-4 py-1.5 bg-orange-500 text-[15px]  rounded-full">
      Create your playlist
    </button>
  </div>

  <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4 text-white">
    <h1>Let's find your podcast to follow</h1>
    <p className="font-light">We will keep you updated on new episodes</p>
    <button className="px-4 py-1.5 bg-orange-500 text-[15px] text-white rounded-full mt-4">
      Browse podcast
    </button>
  </div>
</div>
</div>

  );
}
export default Sidebar;
