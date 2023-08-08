import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './PlayerControls.module.css'
import Icon from '../../../Icon/Icon'
import {
  isPlayingSelector,
  isAutoplaySelector,
  currentTrackSelector,
} from '../../../../store/selectors/pleer'
import {
  nextTrack,
  prevTrack,
  togglePlaying,
  toggleAutoplay,
} from '../../../../store/actions/creators/pleer'

function PlayerControls({ audioRef, changeAutoplay }) {
  const dispatcher = useDispatch()
  const isPlaying = useSelector(isPlayingSelector)
  const isAutoplay = useSelector(isAutoplaySelector)
  const currentTrack = useSelector(currentTrackSelector)
  const handleNextTrack = () => dispatcher(nextTrack())
  const handlePrevTrack = () => dispatcher(prevTrack(3))

  const handleTogglePlaying = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else audioRef.current.play()
    dispatcher(togglePlaying())
  }

  const handleToggleAutoplay = () => {
    changeAutoplay(!isAutoplay)
    dispatcher(toggleAutoplay())
  }
  const underconstruction = () => {
    alert('Еще не реализовано')
  }

  //   const togglePlay = isPlaying ? handleStop : handleStart

  useEffect(() => {
    audioRef.current.play()
  }, [currentTrack])

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
        action={handleTogglePlaying}
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
          isAutoplay ? 'player__btn-active' : ''
        }`}
        classSvg="player__btn-repeat-svg"
        iconName="repeat"
        alt="repeat"
        action={handleToggleAutoplay}
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
