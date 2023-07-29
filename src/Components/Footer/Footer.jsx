import { useRef, useEffect, useState } from 'react'
import styles from './Footer.module.css'
import Player from './Player/Player'
import Volume from './Volume/Volume'

export default function Footer({ currentSong }) {
  const [currentProgress, setCurrentProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  const progressRef = useRef(null)

  const changeVolume = (value) => {
    audioRef.current.volume = value
  }
  const handlerTimeUpdate = () => {
    setCurrentProgress(Math.floor(audioRef?.current?.currentTime))
  }

  useEffect(() => {
    console.log(audioRef.current.duration)
    console.log(progressRef.current.value)
    setDuration(Math.floor(audioRef?.current?.duration))
  }, [audioRef?.current?.loadedmetadata, audioRef?.current?.readyState])
  return (
    <footer className={styles.main}>
      <div className={styles.player__progress}>
        <input
          ref={progressRef}
          className={styles.player__progressLine}
          type="range"
          max={duration}
          defaultValue={0}
          value={currentProgress}
        />
        {`${currentProgress}:${duration}`}
      </div>
      <div className={styles.player__block}>
        <Player currentSong={currentSong} audioRef={audioRef} />
        <Volume changeVolume={changeVolume} />
      </div>

      <div>
        <audio
          ref={audioRef}
          src={currentSong.track_file}
          onTimeUpdate={handlerTimeUpdate}
        >
          <track kind="captions" />
        </audio>
      </div>
    </footer>
  )
}
