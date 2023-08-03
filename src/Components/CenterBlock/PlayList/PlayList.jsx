import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './PlayList.module.css'
import PlayListItem from './PlayListItem/PlayListItem'
import { IsLoading } from '../../../contexts/context'
import Icon from '../../Icon/Icon'

function PlayList({ playList, currentSong, setCurrentSong }) {
  const isLoading = useContext(IsLoading)
  const playListItems = isLoading
    ? Array(4)
        .fill('')
        .map(() => <PlayListItem isLoading={isLoading} key={uuidv4()} />)
    : playList.map((song) => (
        <PlayListItem
          song={song}
          key={song.id}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
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
export default PlayList
