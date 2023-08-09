import { useSelector } from 'react-redux'
import styles from './Icon.module.css'
import { isPlayingSelector } from '../../store/selectors/pleer'

function Icon({
  classDiv = '',
  classSvg = '',
  alt = '',
  iconName = '',
  action = null,
  isCurrentTrack = false,
}) {
  const isPlaying = useSelector(isPlayingSelector)
  let classDivList = classDiv ? classDiv.split(' ') : ''

  classDivList = classDivList
    ? classDivList.map((classDivName) => `${styles[classDivName]}`).join(' ')
    : ''
  const handleClick = () => {
    if (action) action()
  }
  return (
    <div
      className={classDivList}
      onClick={handleClick}
      role="button"
      tabIndex="0"
      onKeyUp={() => {}}
    >
      {isCurrentTrack ? (
        <div
          className={`${styles.sign} ${!isPlaying ? styles.pause : styles.run}`}
        />
      ) : (
        <svg className={`${styles[classSvg]}`} alt={alt}>
          <use xlinkHref={`../img/icon/sprite.svg#icon-${iconName}`} />
        </svg>
      )}
    </div>
  )
}
export default Icon
