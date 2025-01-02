import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./displayhome";
import { Albums } from "../songsdata/albums";
import Movies from "./moviesdisplay";

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
      displayRef.current.style.background = "#121212";
    }
  }, [isAlbum, bColor]);

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/albums/:id" element={<Movies />} />
      </Routes>
    </div>
  );
};

export default Display;
