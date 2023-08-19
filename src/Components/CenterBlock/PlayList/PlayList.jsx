import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import Icon from '../../Icon/Icon'
import useChangeLike from '../../../customHooks/customHooks'
import styles from './PlayList.module.css'
import PlayListItem from './PlayListItem/PlayListItem'
import {
  currentPageSelector,
  favoritesSelector,
  isLoadingSelector,
  playListSelector,
} from '../../../store/selectors/pleer'
import { PLAYLIST } from '../../../const'

export default function PlayList() {
  const isLoading = useSelector(isLoadingSelector)
  const main = useSelector(playListSelector)
  const favorites = useSelector(favoritesSelector)
  const currentPage = useSelector(currentPageSelector)
  const playList = currentPage === PLAYLIST ? main : favorites
  const [clickedTrack, setClickedTrack] = useState({})
  const disLike = useChangeLike(true)
  const like = useChangeLike(false)

  let playListItems = Array(5)
    .fill('')
    .map(() => <PlayListItem isLoading={isLoading} key={uuidv4()} />)

  if (!isLoading && playList?.length) {
    playListItems = playList.map((song) => (
      <PlayListItem
        isLoading={isLoading}
        song={song}
        key={song.id}
        toggler={setClickedTrack}
      />
    ))
  }
  useEffect(() => {
    if (!clickedTrack?.id) return
    console.log(`clickedTrack ${clickedTrack?.id}`)
    const f = clickedTrack?.isLiked ? disLike : like

    f(clickedTrack)
  }, [clickedTrack])
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
