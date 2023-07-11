import styles from './Footer.module.css'

import Player from './Player/Player'
import Volume from './Volume/Volume'

function Footer({ loading }) {
  return (
    <footer className={styles.main}>
      <div className={styles.player__progress} />
      <div className={styles.player__block}>
        <Player loading={loading} />
        <Volume />
      </div>
    </footer>
  )
}
export default Footer
