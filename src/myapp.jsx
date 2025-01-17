import React, { useContext, useState } from "react";
import Sidebar from "./components/sidebar";
import Player from "./components/player";
import Display from "./components/display";
import { PlayerContext } from "./context/playercontext";
import "./myapp.css";
import Form from "./components/login";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    setShowLogin(false); // Hide login form after successful login
  };

  const handlePlayClick = () => {
    if (!isLoggedIn) {
      setShowLogin(true); // Show login form if user is not logged in
    }
  };

  return (
    <div className="h-screen bg-black mainDiv">
      {showLogin && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <Form onLogin={handleLogin} />
        </div>
      )}
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player isLoggedIn={isLoggedIn} onPlayClick={handlePlayClick} />
      <audio ref={audioRef} src={track.audio} preload="auto"></audio>
    </div>
  );
};

export default App;
