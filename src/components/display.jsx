import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./displayhome";
import { Albums } from "../songsdata/albums";
import Movies from "./moviesdisplay";
import SongDetails from "./songsdisplay";
import CreatePlaylistPage from "./addtoplaylist";
// import All from './pages/All';
// import Music from './pages/Music';
// import Podcast from './pages/Podcast';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();

  // Check if the current route is an album page
  const isAlbum = location.pathname.includes("albums");

  // Extract the album ID from the pathname
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";

  // Safely get the background color for the album
  const bColor = Albums[Number(albumId)]?.bgColor || "#121212";

  useEffect(() => {
    if (isAlbum && bColor) {
      // Set gradient background if it's an album
      displayRef.current.style.background = `linear-gradient(${bColor}, #121212)`;
    } else {
      // Set default background
      displayRef.current.style.background = "white";
    }
  }, [isAlbum, bColor]);

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded bg-orange-500 text-black overflow-auto lg:w-[85%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/albums/:id" element={<Movies />} />
        <Route path="/song-details" element={<SongDetails />} />
        <Route path="/create-playlist" element={<CreatePlaylistPage />} />
        {/* <Route path="/all" element={<All />} />
        <Route path="/music" element={<Music />} />
        <Route path="/podcast" element={<Podcast />} /> */}
      </Routes>
    </div>
  );
};

export default Display;
