// import React from "react";
import './style.css';
import PlayerControls from './PlayerControls';
import TrackPlay from './TrackPlay';

function Player(){
    return(
      <div className="bar__player player">
        <PlayerControls/>
        <TrackPlay/>
      </div>
        
    )

    }
    export default Player