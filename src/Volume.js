// import React from "react";
import './css/style.css';
import Icon from './Icon';

function Volume(){
    return(
      <div className="bar__volume-block volume">
       
        <div className="volume__content">
            <Icon classDiv="volume__image" classSvg="volume__svg" iconName="volume" alt="volume"/>
            <div className="volume__progress _btn">
                <input
                    className="volume__progress-line _btn"
                    type="range"
                    name="range"
                />
            </div>
        </div>
        </div>
  
        
    )

    }
    export default Volume