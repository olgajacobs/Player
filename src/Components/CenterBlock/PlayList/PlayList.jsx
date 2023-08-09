import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import styles from './PlayList.module.css'
import PlayListItem from './PlayListItem/PlayListItem'
import { IsLoading } from '../../../contexts/context'
import Icon from '../../Icon/Icon'
import { playListSelector } from '../../../store/selectors/pleer'

function PlayList() {
  const isLoading = useContext(IsLoading)
  const playList = useSelector(playListSelector)

  const playListItems = isLoading
    ? Array(5)
        .fill('')
        .map(() => <PlayListItem isLoading={isLoading} key={uuidv4()} />)
    : playList.map((song) => <PlayListItem song={song} key={song.id} />)

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
