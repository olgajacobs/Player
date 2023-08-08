// import React from "react";
import styles from './Player.module.css'
import PlayerControls from './PlayerControls/PlayerControls'
import TrackPlay from './TrackPlay/TrackPlay'

function Player({ audioRef, changeLoop }) {
  return (
    <div className={styles.main}>
      <PlayerControls audioRef={audioRef} changeLoop={changeLoop} />
      <TrackPlay />
    </div>
  )
}
export default Player
