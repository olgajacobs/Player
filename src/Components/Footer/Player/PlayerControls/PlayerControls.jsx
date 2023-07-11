import styles from './PlayerControls.module.css'
import Icon from '../../../Icon/Icon'

function PlayerControls() {
  return (
    <div className={styles.main}>
      <Icon
        classDiv="player__btn-prev _btn-icon"
        classSvg="player__btn_prev_svg"
        iconName="prev"
        alt="prev"
      />
      <Icon
        classDiv="player__btn-play _btn-icon"
        classSvg="player__btn-play-svg"
        iconName="play"
        alt="play"
      />
      <Icon
        classDiv="player__btn-next _btn-icon"
        classSvg="player__btn-next-svg"
        iconName="next"
        alt="next"
      />
      <Icon
        classDiv="player__btn-repeat _btn-icon"
        classSvg="player__btn-repeat-svg"
        iconName="repeat"
        alt="repeat"
      />
      <Icon
        classDiv="player__btn-shuffle _btn-icon"
        classSvg="player__btn-shuffle-svg"
        iconName="shuffle"
        alt="shuffle"
      />
    </div>
  )
}
export default PlayerControls
