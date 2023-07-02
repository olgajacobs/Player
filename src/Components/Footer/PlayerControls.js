// import React from "react";
import './style.css'
import Icon from '../../Icon'

function PlayerControls() {
  return (
    <div className="player__controls">
      <Icon
        classDiv="player__btn-prev"
        classSvg="player__btn-prev-svg"
        iconName="prev"
        alt="prev"
      />
      <Icon
        classDiv="player__btn-play _btn"
        classSvg="player__btn-play-svg"
        iconName="play"
        alt="play"
      />
      <Icon
        classDiv="player__btn-next"
        classSvg="player__btn-next-svg"
        iconName="next"
        alt="next"
      />
      <Icon
        classDiv="player__btn-repeat"
        classSvg="player__btn-repeat-svg"
        iconName="repeat"
        alt="repeat"
      />
      <Icon
        classDiv="player__btn-shuffle _btn-icon"
        classSvg="player__btn-shuffle-svg"
        iconName="shuffle"
        alt="shuffle"
      />
    </div>
  )
}
export default PlayerControls
