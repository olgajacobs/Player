import styles from './PlayListItem.module.css'
import Icon from '../../../../Icon/Icon'

function PlayListItem() {
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
}

export default PlayListItem
