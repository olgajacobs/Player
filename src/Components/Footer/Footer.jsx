import { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Footer.module.css'
import Player from './Player/Player'
import Volume from './Volume/Volume'
import { timeFormat } from '../../util'
import {
  isLoopSelector,
  currentTrackSelector,
} from '../../store/selectors/pleer'
import { nextTrack } from '../../store/actions/creators/pleer'

export default function Footer() {
  const audioRef = useRef(null)
  const [currentProgress, setCurrentProgress] = useState(
    JSON.parse(localStorage.getItem('progress')),
  )
  const handleChangeProgress = (value) => {
    audioRef.current.currentTime = value
    localStorage.setItem('progress', JSON.stringify(value))
    setCurrentProgress(value)
  }
  const [duration, setDuration] = useState(0)
  const dispatcher = useDispatch()
  const isLoop = useSelector(isLoopSelector)
  const currentTrack = useSelector(currentTrackSelector)

  const changeVolume = (value) => {
    audioRef.current.volume = value
  }
  const changeLoop = (value) => {
    audioRef.current.loop = value
  }

  const handlerTimeUpdate = () => {
    const cp = audioRef?.current?.currentTime
    localStorage.setItem('progress', JSON.stringify(cp))
    setCurrentProgress(cp)
  }

  const handlerLoadedMetadata = () => {
    setDuration(audioRef?.current?.duration)
  }
  const handlerEnded = () => {
    if (!isLoop) {
      dispatcher(nextTrack())
    }
  }

  useEffect(() => {
    handleChangeProgress(JSON.parse(localStorage.getItem('progress')))
  }, [])

  return (
    <footer className={styles.main}>
      <div className={styles.player__progress}>
        <input
          className={styles.player__progressLine}
          type="range"
          name="progress"
          max={duration}
          value={currentProgress}
          onChange={(e) => handleChangeProgress(Number(e.target.value))}
        />
        <div className={styles.time}>{`${timeFormat(
          Math.floor(currentProgress),
        )}/${timeFormat(Math.floor(duration))}`}</div>
      </div>
      <div className={styles.player__block}>
        <Player
          audioRef={audioRef}
          changeLoop={changeLoop}
          currentProgress={currentProgress}
          handleChangeProgress={handleChangeProgress}
        />
        <Volume changeVolume={changeVolume} />
      </div>

      <div>
        <audio
          ref={audioRef}
          src={currentTrack.track_file}
          onTimeUpdate={handlerTimeUpdate}
          onLoadedMetadata={handlerLoadedMetadata}
          onEnded={handlerEnded}
        >
          <track kind="captions" />
        </audio>
      </div>
    </footer>
  )
}
