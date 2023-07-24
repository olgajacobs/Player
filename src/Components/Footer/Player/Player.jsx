// import React from "react";
import styles from './Player.module.css'
import PlayerControls from './PlayerControls/PlayerControls'
import TrackPlay from './TrackPlay/TrackPlay'

function Player({ currentSong }) {
  return (
    <div className={styles.main}>
      <PlayerControls />
      <TrackPlay currentSong={currentSong} />
    </div>
  )
}
export default Player
