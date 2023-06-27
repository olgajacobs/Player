// import React from "react";
import './css/style.css';

import Player from './Player';
import Volume from './Volume';

function BottomBar(){
    return(
      <div className ="bar bar__content">
        <div className="bar__player-block">
            <Player/>
            <Volume/>
        </div>
      </div>
        
    )

    }
    export default BottomBar