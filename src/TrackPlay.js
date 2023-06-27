// import React from "react";
import './css/style.css';
import Icon from './Icon'

function TrackPlay(){
    return(
      <div className="player__track-play track-play">
        <div className="track-play__contain">
            <Icon classDiv="track-play__image" classSvg="track-play__svg" iconName="note" alt="music" />
            <div className="track-play__author">
                <a className="track-play__author-link" href="http://">Ты та..Автор Песни.</a>
            </div>
            <div className="track-play__album">
                <a className="track-play__album-link" href="http://">Баста</a>
             </div>
        </div>
        <div className="track-play__like-dis">
            <Icon classDiv="track-play__like _btn-icon" classSvg="track-play__like-svg" iconName="like" alt="like" />
            <Icon classDiv="track-play__dislike _btn-icon" classSvg="track-play__dislike-svg" iconName="dislike" alt="dislike" />
        </div>         
      </div>
        
    )

    }
    export default TrackPlay