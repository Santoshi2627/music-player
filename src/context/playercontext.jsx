import { createContext, useEffect, useRef, useState } from "react";
// import App from "../myapp";
import { Telugu } from "../songsdata/telugualbum";

export const PlayerContext = createContext();

const PlayerProvider = (props) => {
  //create one reference for audio tag
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  
  //create a state variable to manage  the project states and pass these values using contextvalue
  const [track, setTrack] = useState(Telugu[0]);
  
  //to check the song displaying or paused and  whenever our project is loaded the state will be false and song will be paused and pass these values using contextvalue
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    //tracks curenttime
    currentTime: {
      second: 0,
      minute: 0,
    },
    //tracks totalTime
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  // Function to play the audio
  const play = () => {
    if (!playStatus && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing the audio:", error);
      });
      setPlayStatus(true);
    }
  };
  //previous button functionality
  const previous=async()=>{
    if(track.id>0){
        await setTrack(Telugu[track.id-1])
        await audioRef.current.play()//whenever we cahnge the track the player will be paused and again it will play
        setPlayStatus(true)
    }
  }
  const next=async()=>{
    if(track.id<Telugu.length-1){
        await setTrack(Telugu[track.id+1])
        await audioRef.current.play()//whenever we cahnge the track the player will be paused and again it will play
        setPlayStatus(true)
    }
  }
  //using the useeffect to track the time of a song
  useEffect(()=>{
    setTimeout(()=>{
        audioRef.current.ontimeupdate=()=>{
            //when the playtime will increasing in that case width also increase for that we use Math.floor(divide the currenttime with total duration)
            seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"//if the duration is 60sec and we are completed 30sec percentage is 50 so the percentage will be 50%
            setTime({
                currentTime: {
                  second: Math.floor(audioRef.current.currentTime % 60),
                  minute: Math.floor(audioRef.current.currentTime / 60),
                },
                totalTime: {
                  second: Math.floor(audioRef.current.duration % 60),
                  minute: Math.floor(audioRef.current.duration / 60),
                },
            })
        }
    })
  },[audioRef])

  // Function to pause the audio
  const pause = () => {
    if (playStatus && audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };
  //when ever i play any song that song will playing
  const playwithId=async (id)=>{
    await setTrack(Telugu[id])//song with id is set the track
    await audioRef.current.play()
    setPlayStatus(true)//when i  play the song setStatus is true
  }

  // Context value to share across components
  const contextValue = {
    //what ever function or state we create in this contextValue we can access in any other component
    audioRef, //we want to access this in app so simple add this audioref in this contextValue
    seekBg,
    seekBar,
    track, setTrack,
    playStatus, setPlayStatus,
    play, pause,
    time,setTime,
    playwithId,
    previous,next
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
      {/*means that any component inside the PlayerProvider will have access to this context.*/}
      {/* <App /> */}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
