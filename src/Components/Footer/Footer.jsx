import { useRef, useState } from 'react'
import styles from './Footer.module.css'
import Player from './Player/Player'
import Volume from './Volume/Volume'
import timeFormat from '../../util'

export default function Footer({ currentSong }) {
  const [currentProgress, setCurrentProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)

  //   console.log(currentSong)
  // const progressRef = useRef(null)

  const changeVolume = (value) => {
    audioRef.current.volume = value
  }
  const changeAutoplay = (value) => {
    audioRef.current.loop = value
  }

  const handlerTimeUpdate = () => {
    setCurrentProgress(Math.floor(audioRef?.current?.currentTime))
  }

  const handlerLoadedMetadata = () => {
    setDuration(Math.floor(audioRef?.current?.duration))
  }

  const handleChangeProgress = (e) => {
    audioRef.current.currentTime = Number(e.target.value)
    setCurrentProgress(e.target.value)
  }

  return (
    <footer className={styles.main}>
      <div className={styles.player__progress}>
        <input
          // ref={progressRef}
          className={styles.player__progressLine}
          type="range"
          name="progress"
          max={duration}
          value={currentProgress}
          onChange={(e) => handleChangeProgress(e)}
        />
        <div className={styles.time}>{`${timeFormat(
          currentProgress
        )}/${timeFormat(duration)}`}</div>
      </div>
      <div className={styles.player__block}>
        <Player audioRef={audioRef} changeAutoplay={changeAutoplay} />
        <Volume changeVolume={changeVolume} />
      </div>

      <div>
        <audio
          ref={audioRef}
          src={currentSong.track_file}
          onTimeUpdate={handlerTimeUpdate}
          onLoadedMetadata={handlerLoadedMetadata}
        >
          <track kind="captions" />
        </audio>
      </div>
    </footer>
  )
}
