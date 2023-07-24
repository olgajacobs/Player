// import React from "react";
import styles from './PlayListItem.module.css'
import Icon from '../../../Icon/Icon'

function timeFormat(timeInSeconds) {
  const min = Math.floor(timeInSeconds / 60)
  let minStr = ''
  if (min === 0) minStr = '00'
  else if (min < 10) minStr = `0${min.toString()}`
  else minStr = min.toString()

  const sec = timeInSeconds - min * 60
  let secStr = ''
  if (sec === 0) secStr = '00'
  else if (sec < 10) secStr = `0${sec.toString()}`
  else secStr = sec.toString()
  return `${minStr}:${secStr}`
}

function PlayListItem({ isLoading, song, setCurrentSong }) {
  console.log(song)
  const chooseCurrentSong = () => {
    setCurrentSong(song)
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
        className={styles.playlist__track}
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
