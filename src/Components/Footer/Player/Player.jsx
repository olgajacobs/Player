// import React from "react";
import styles from './Player.module.css'
import PlayerControls from './PlayerControls/PlayerControls'
import TrackPlay from './TrackPlay/TrackPlay'

function Player({ currentSong, audioRef,changeLoop }) {
  return (
    <div className={styles.main}>
      <PlayerControls audioRef={audioRef} currentSong={currentSong} changeLoop={changeLoop} />
      <TrackPlay currentSong={currentSong} />
    </div>
  )
}
export default Player
