import React, { useContext } from 'react'
import Sidebar from './components/sidebar';
import Player from './components/player';
import Display from './components/display';
import { PlayerContext } from './context/playercontext';
const App=()=>{
  const {audioRef,track}=useContext(PlayerContext)
  // we link this audioref in audio tag
    return(
        <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
          </div>
          <Player/>
        
          <audio  ref={audioRef} src={track.audio} preload='auto'></audio>
          {/* using this refernce we can pause play or change the track of the audio file and also we will get the song file */}
        </div>
    
    )

}
export default App;