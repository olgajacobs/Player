import { useRef, useState } from 'react'
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
  const [currentProgress, setCurrentProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const dispatcher = useDispatch()
  const isLoop = useSelector(isLoopSelector)
  const currentTrack = useSelector(currentTrackSelector)
  const audioRef = useRef(null)

  const changeVolume = (value) => {
    audioRef.current.volume = value
  }
  const changeLoop = (value) => {
    audioRef.current.loop = value
  }

  const handlerTimeUpdate = () => {
    setCurrentProgress(Math.floor(audioRef?.current?.currentTime))
  }

  const handlerLoadedMetadata = () => {
    setDuration(Math.floor(audioRef?.current?.duration))
  }
  const handlerEnded = () => {
    if (!isLoop) {
      dispatcher(nextTrack())
    }
  }

  const handleChangeProgress = (value) => {
    audioRef.current.currentTime = value
    setCurrentProgress(value)
  }
  //   console.log('Footer')
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
          currentProgress,
        )}/${timeFormat(duration)}`}</div>
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
