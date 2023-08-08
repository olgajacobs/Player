import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import styles from './PlayListItem.module.css'
import Icon from '../../../Icon/Icon'
import { timeFormat } from '../../../../util'
import { IsLoading } from '../../../../contexts/context'
import { setCurrentTrack } from '../../../../store/actions/creators/pleer'

function PlayListItem({ song, currentSong }) {
  const isLoading = useContext(IsLoading)
  const isCurrentSong = () => currentSong && currentSong.id === song.id
  const dispatcher = useDispatch()
  const chooseCurrentSong = () => {
    dispatcher(setCurrentTrack(song))
    //    setCurrentSong(song)
  }
  if (isLoading)
    return (
      <div className={styles.main}>
        <div className={styles.playlist__track}>
          <div className={styles.track__titleBlock}>
            <Icon
              classDiv="track__title-image"
              classSvg="track__title-svg"
              iconName="note"
              alt="music"
            />
            <div className={`${styles.track__title} ${styles.grey}`} />
          </div>
          <div className={`${styles.track__author} ${styles.grey}`} />
          <div className={`${styles.track__album} ${styles.grey}`} />
          <div className={styles.track__timeBlock}>
            <Icon
              classDiv=""
              classSvg="track__time-svg"
              iconName="like"
              alt="time"
            />
            <span className={`${styles.track__time} ${styles.grey}`} />
          </div>
        </div>
      </div>
    )
  return (
    <div className={styles.main}>
      <div
        className={`${styles.playlist__track} ${
          isCurrentSong() ? styles.currentSong : ''
        }`}
        onClick={chooseCurrentSong}
        role="button"
        tabIndex="0"
        onKeyUp={() => {}}
      >
        <div className={styles.track__titleBlock}>
          <Icon
            classDiv="track__title-image"
            classSvg="track__title-svg"
            iconName="note"
            alt="music"
          />
          <div className={`${styles.track__title} ${styles.track__link}`}>
            {song.name}
          </div>
        </div>
        <div className={`${styles.track__author} ${styles.track__link}`}>
          {song.author}
        </div>
        <div className={`${styles.track__album} ${styles.track__link}`}>
          {song.album}
        </div>
        <div className={styles.track__timeBlock}>
          <Icon
            classDiv="_btn-icon"
            classSvg="track__time-svg"
            iconName="like"
            alt="time"
          />

          <span className={styles.track__time}>
            {timeFormat(song.duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  )
}
export default PlayListItem
