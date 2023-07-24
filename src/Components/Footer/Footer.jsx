import styles from './Footer.module.css'

import Player from './Player/Player'
import Volume from './Volume/Volume'

function Footer({ currentSong }) {
  return (
    <footer className={styles.main}>
      <div className={styles.player__progress} />
      <div className={styles.player__block}>
        <Player currentSong={currentSong} />
        <Volume />
      </div>
    </footer>
  )
}
export default Footer
