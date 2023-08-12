import { useDispatch, useSelector } from 'react-redux'
import styles from './PlayListItem.module.css'
import Icon from '../../../Icon/Icon'
import { timeFormat } from '../../../../util'
import { setCurrentTrack } from '../../../../store/actions/creators/pleer'
import {
  currentTrackSelector,
  isLoadingSelector,
} from '../../../../store/selectors/pleer'

function PlayListItem({ song }) {
  const isLoading = useSelector(isLoadingSelector)
  const dispatcher = useDispatch()
  const chooseCurrentSong = () => dispatcher(setCurrentTrack(song))
  const currentTrack = useSelector(currentTrackSelector)
  const isCurrentTrack = currentTrack?.id && currentTrack.id === song.id

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
        className={styles.playlist__track}
        // className={`${styles.playlist__track} ${
        //   isCurrentTrack ? styles.currentSong : ''
        // }`}
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
            isCurrentTrack={isCurrentTrack}
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
