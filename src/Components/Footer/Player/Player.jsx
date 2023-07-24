// import React from "react";
import styles from './Player.module.css'
import PlayerControls from './PlayerControls/PlayerControls'
import TrackPlay from './TrackPlay/TrackPlay'

function Player({ isLoading }) {
  return (
    <div className={styles.main}>
      <PlayerControls />
      <TrackPlay loading={isLoading} />
    </div>
  )
}
export default Player
