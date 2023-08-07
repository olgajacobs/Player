// import React from "react";
import styles from './Player.module.css'
import PlayerControls from './PlayerControls/PlayerControls'
import TrackPlay from './TrackPlay/TrackPlay'

function Player({ audioRef, changeAutoplay }) {
  return (
    <div className={styles.main}>
      <PlayerControls audioRef={audioRef} changeAutoplay={changeAutoplay} />
      <TrackPlay />
    </div>
  )
}
export default Player
