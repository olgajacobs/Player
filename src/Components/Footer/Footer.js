// import React from "react";
import './style.css';

import Player from './Player';
import Volume from './Volume';

function Footer(){
    return(
      <footer className ="bar bar__content">
        <div className="bar__player-progress"/>
        <div className="bar__player-block">
            <Player/>
            <Volume/>
        </div>
      </footer>
        
    )

    }
    export default Footer