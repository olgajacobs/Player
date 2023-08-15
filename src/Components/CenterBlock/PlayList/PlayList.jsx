import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import Icon from '../../Icon/Icon'
import { useReadTracks } from '../../../customHooks/customHooks'
import styles from './PlayList.module.css'
import PlayListItem from './PlayListItem/PlayListItem'
import { addLike } from '../../../util'
import { currentPageSelector } from '../../../store/selectors/pleer'

export default function PlayList() {
  const currentPage = useSelector(currentPageSelector)
  let playListItems = Array(5)
    .fill('')
    .map(() => <PlayListItem flag={false} key={uuidv4()} />)

  const { newPlaylist, isLoading, error } = useReadTracks()

  if (!isLoading && !error?.message && newPlaylist?.length) {
    const pl = newPlaylist ? addLike(newPlaylist, currentPage) : undefined

    playListItems = pl.map((song) => (
      <PlayListItem flag={!isLoading} song={song} key={song.id} />
    ))
  }
  //   console.log(`PL isLoading ${isLoading} ${data?.length} ${error?.message}`)
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
