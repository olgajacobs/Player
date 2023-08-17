import { useDispatch, useSelector } from 'react-redux'
import styles from './PlayListItem.module.css'
import Icon from '../../../Icon/Icon'
import { timeFormat } from '../../../../util'
import { setCurrentTrack } from '../../../../store/actions/creators/pleer'
import { currentTrackSelector } from '../../../../store/selectors/pleer'

function PlayListItem({ flag, song, toggler }) {
  //   const isLoading = useSelector(isLoadingSelector)
  const dispatch = useDispatch()
  const handleSetCurrentTrack = () => dispatch(setCurrentTrack(song))
  const currentTrack = useSelector(currentTrackSelector)
  //   console.log(`PLI  ${flag} ${currentTrack} ${song}`)
  const isCurrentTrack = currentTrack?.id && currentTrack.id === song?.id

  //   const handleToggleLike = song ? useChangeLike(song) : () => {}

  if (!flag)
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
        onClick={handleSetCurrentTrack}
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
            classSvg={`track__time-svg ${song.isLiked ? 'liked' : ''}`}
            iconName="like"
            alt="time"
            action={() => {
              toggler(song)
            }}
          />

          <span className={styles.track__time}>
            {timeFormat(song.duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  )
}
// const callHook=()=>{

// }

export default PlayListItem
