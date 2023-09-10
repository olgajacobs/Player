import { v4 as uuidv4 } from 'uuid'
import Icon from '../../../Icon/Icon'
import PlayListItem from './PlayListItem/PlayListItem'
import styles from './PlayList.module.css'

export default function PlayList() {
  const playListItems = Array(7)
    .fill('')
    .map(() => <PlayListItem key={uuidv4()} />)

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
