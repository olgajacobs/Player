import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './PlayerControls.module.css'
import Icon from '../../../Icon/Icon'
import {
  isPlayingSelector,
  isLoopSelector,
  currentTrackSelector,
} from '../../../../store/selectors/pleer'
import {
  nextTrack,
  prevTrack,
  setIsPlaying,
  toggleLoop,
} from '../../../../store/actions/creators/pleer'

function PlayerControls({ audioRef, changeLoop }) {
  const dispatcher = useDispatch()
  const isPlaying = useSelector(isPlayingSelector)
  const isLoop = useSelector(isLoopSelector)
  const currentTrack = useSelector(currentTrackSelector)
  const handleNextTrack = () => dispatcher(nextTrack())
  const handlePrevTrack = () => dispatcher(prevTrack(3))

  const handleTogglePlaying = () => {
    console.log('Toggle')
    if (isPlaying) {
      audioRef.current.pause()
      dispatcher(setIsPlaying(false))
    } else {
      audioRef.current.play()
      dispatcher(setIsPlaying(true))
    }
  }

  const handleToggleLoop = () => {
    changeLoop(!isLoop)
    dispatcher(toggleLoop())
  }
  const underconstruction = () => {
    alert('Еще не реализовано')
  }

  useEffect(() => {
    console.log('PlayerControls')
    audioRef.current.play()
    dispatcher(setIsPlaying(true))
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
          isLoop ? 'player__btn-active' : ''
        }`}
        classSvg="player__btn-repeat-svg"
        iconName="repeat"
        alt="repeat"
        action={handleToggleLoop}
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
