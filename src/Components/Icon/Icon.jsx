import { useDispatch, useSelector } from 'react-redux'
import styles from './Icon.module.css'
import { isPlayingSelector } from '../../store/selectors/pleer'
import { toggleIsLiked } from '../../store/slices/pleer'

function Icon({
  classDiv = '',
  classSvg = '',
  alt = '',
  iconName = '',
  action = null,
  isCurrentTrack = false,
  song = {},
}) {
  const dispatch = useDispatch()

  const isPlaying = useSelector(isPlayingSelector)
  let classDivList = classDiv ? classDiv.split(' ') : ''

  classDivList = classDivList
    ? classDivList.map((classDivName) => `${styles[classDivName]}`).join(' ')
    : ''
  let classSvgList = classSvg ? classSvg.split(' ') : ''

  classSvgList = classSvgList
    ? classSvgList.map((classSvgName) => `${styles[classSvgName]}`).join(' ')
    : ''
  const handleClick = (e) => {
    e.stopPropagation()
    if (action) {
      if (song) {
        console.log('Like is changed')
        dispatch(toggleIsLiked())
      }
      //   action(song)
    }
  }
  return (
    <div
      className={classDivList}
      onClick={(e) => handleClick(e)}
      role="button"
      tabIndex="0"
      onKeyUp={() => {}}
    >
      {isCurrentTrack ? (
        <div
          className={`${styles.sign} ${!isPlaying ? styles.pause : styles.run}`}
        />
      ) : (
        <svg className={classSvgList} alt={alt}>
          <use xlinkHref={`../img/icon/sprite.svg#icon-${iconName}`} />
        </svg>
      )}
    </div>
  )
}
export default Icon
