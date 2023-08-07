import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './PlayerControls.module.css'
import Icon from '../../../Icon/Icon'
import { currentTrackSelector } from '../../../../store/selectors/pleer'
import { nextTrack, prevTrack } from '../../../../store/actions/creators/pleer'

function PlayerControls({ audioRef, changeLoop }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoop, setIsLoop] = useState(false)
  const dispatcher = useDispatch()
  const currentSong = useSelector(currentTrackSelector)
  const handleNextTrack = () => dispatcher(nextTrack())
  const handlePrevTrack = () => dispatcher(prevTrack(3))

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }
  const handleLoop = () => {
    const newLoop = !audioRef.current.loop
    changeLoop(newLoop)
    setIsLoop(newLoop)
  }
  const underconstruction = () => {
    alert('Еще не реализовано')
  }

  const togglePlay = isPlaying ? handleStop : handleStart

  useEffect(() => {
    handleStart()
  }, [currentSong])
  return (
    <div className={styles.main}>
      <Icon
        classDiv="player__btn-prev _btn-icon"
        classSvg="player__btn_prev_svg"
        iconName="prev"
        alt="prev"
        action={handlePrevTrack}
      />
      <Icon
        classDiv="player__btn-play _btn-icon"
        classSvg="player__btn-play-svg"
        iconName={`${isPlaying ? 'pause' : 'play'}`}
        alt="play"
        action={togglePlay}
      />
      <Icon
        classDiv="player__btn-next _btn-icon"
        classSvg="player__btn-next-svg"
        iconName="next"
        alt="next"
        action={handleNextTrack}
      />
      <Icon
        classDiv={`player__btn-repeat _btn-icon ${
          isLoop ? 'player__btn-active' : ''
        }`}
        classSvg="player__btn-repeat-svg"
        iconName="repeat"
        alt="repeat"
        action={handleLoop}
      />
      <Icon
        classDiv="player__btn-shuffle _btn-icon"
        classSvg="player__btn-shuffle-svg"
        iconName="shuffle"
        alt="shuffle"
        action={underconstruction}
      />
    </div>
  )
}
export default PlayerControls
