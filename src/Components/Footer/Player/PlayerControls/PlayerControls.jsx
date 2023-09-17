import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './PlayerControls.module.css'
import Icon from '../../../Icon/Icon'
import {
  isPlayingSelector,
  isLoopSelector,
  currentTrackSelector,
  isShuffledSelector,
} from '../../../../store/selectors/pleer'
import {
  nextTrack,
  prevTrack,
  setIsPlaying,
  toggleLoop,
  toggleShuffled,
} from '../../../../store/slices/pleer'

function PlayerControls({
  audioRef,
  changeLoop,
  currentProgress,
  handleChangeProgress,
}) {
  const isPlaying = useSelector(isPlayingSelector)
  const isLoop = useSelector(isLoopSelector)
  const isShuffled = useSelector(isShuffledSelector)
  const currentTrack = useSelector(currentTrackSelector)

  const dispatch = useDispatch()
  const handleNextTrack = () => dispatch(nextTrack())
  const handlePrevTrack = () => {
    if (currentProgress <= 5) handleChangeProgress(0)
    else dispatch(prevTrack())
  }

  const handleTogglePlaying = () => {
    console.log(`ToggPlay isPlaying ${isPlaying}`)
    if (isPlaying) {
      audioRef.current.pause()
      dispatch(setIsPlaying({ isPlaying: false }))
    } else {
      audioRef.current.play()
      dispatch(setIsPlaying({ isPlaying: true }))
    }
  }

  const handleToggleLoop = () => {
    changeLoop(!isLoop)
    dispatch(toggleLoop())
  }
  const handleToggleShuffled = () => {
    changeLoop(!isLoop)
    dispatch(toggleShuffled())
  }

  useEffect(() => {
    console.log('PlayerControls')
    audioRef.current.play()
    dispatch(setIsPlaying({ isPlaying: true }))
  }, [currentTrack.id])

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
        classDiv={`player__btn-shuffle _btn-icon ${
          isShuffled ? 'player__btn-active' : ''
        }`}
        classSvg="player__btn-shuffle-svg"
        iconName="shuffle"
        alt="shuffle"
        action={handleToggleShuffled}
      />
    </div>
  )
}
export default PlayerControls
