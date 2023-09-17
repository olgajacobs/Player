import { useDispatch } from 'react-redux'
import Icon from '../../Icon/Icon'
import changeLike from '../../../customHooks/customHooks'
import styles from './PlayList.module.css'
import PlayListItem from './PlayListItem/PlayListItem'
// import { favoritesSelector } from '../../../store/selectors/pleer'
// import {
//   currentPageSelector,
//   favoritesSelector,
//   playListSelector,
// } from '../../../store/selectors/pleer'
// import { PLAYLIST } from '../../../const'
import { loadPlayList } from '../../../store/slices/pleer'

export default function PlayList({ playList, currentPage }) {
  console.log('PlayList')
  //   const main = useSelector(playListSelector)
  //   const favorites = useSelector(favoritesSelector)
  //   const currentPage = useSelector(currentPageSelector)
  const dispatch = useDispatch()
  dispatch(loadPlayList({ playList, currentPage }))
  //   const pl = currentPage === PLAYLIST ? playList : favorites
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
