import { useSelector } from 'react-redux'
import Icon from '../../Icon/Icon'
import changeLike from '../../../customHooks/customHooks'
import styles from './PlayList.module.css'
import PlayListItem from './PlayListItem/PlayListItem'
import {
  currentPageSelector,
  favoritesSelector,
  playListSelector,
} from '../../../store/selectors/pleer'
import { PLAYLIST } from '../../../const'

export default function PlayList() {
  const main = useSelector(playListSelector)
  const favorites = useSelector(favoritesSelector)
  const currentPage = useSelector(currentPageSelector)
  const playList = currentPage === PLAYLIST ? main : favorites
  const disLike = changeLike(true)
  const like = changeLike(false)

  const playListItems = playList.map((song) => (
    <PlayListItem
      song={song}
      key={song.id}
      toggler={song.isLiked ? disLike : like}
    />
  ))
  return (
    <div className={styles.main}>
      <div className={styles.content__title}>
        <div className={`${styles.content__titleCol} ${styles.col01}`}>
          ТРЕК
        </div>
        <div className={`${styles.content__titleCol} ${styles.col02}`}>
          ИСПОЛНИТЕЛЬ
        </div>
        <div className={`${styles.content__titleCol} ${styles.col03}`}>
          АЛЬБОМ
        </div>
        <Icon
          classDiv="content__titleCol col04"
          classSvg="playlist-title__svg"
          iconName="watch"
          alt="time"
        />
      </div>

      <div className={styles.content__playlist}>{playListItems}</div>
    </div>
  )
}
