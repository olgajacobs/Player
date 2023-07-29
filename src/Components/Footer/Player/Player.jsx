// import React from "react";
import styles from './Player.module.css'
import PlayerControls from './PlayerControls/PlayerControls'
import TrackPlay from './TrackPlay/TrackPlay'

function Player({ currentSong, audioRef }) {
  return (
    <div className={styles.main}>
      <PlayerControls audioRef={audioRef} currentSong={currentSong} />
      <TrackPlay currentSong={currentSong} />
    </div>
  )
}
export default Player
