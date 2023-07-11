// import React from "react";
import styles from './PlayListItem.module.css'
import Icon from '../../../Icon/Icon'

function PlayListItem({
  loading = false,
  titleName = '',
  authorName = '',
  albumName = '',
  commentName = '',
  hrefTitle = '',
  hrefAuthor = '',
  hrefAlbum = '',
  time = '',
}) {
  if (loading)
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
      <div className={styles.playlist__track}>
        <div className={styles.track__titleBlock}>
          <Icon
            classDiv="track__title-image"
            classSvg="track__title-svg"
            iconName="note"
            alt="music"
          />
          <div className={styles.track__title}>
            <a className={styles.track__titleLink} href={hrefTitle}>
              {titleName}
              <span className="track__title-span">{commentName}</span>
            </a>
          </div>
        </div>
        <div className={styles.track__author}>
          <a className={styles.track__authorLink} href={hrefAuthor}>
            {authorName}
          </a>
        </div>
        <div className={styles.track__album}>
          <a className={styles.track__albumLink} href={hrefAlbum}>
            {albumName}
          </a>
        </div>
        <div className={styles.track__timeBlock}>
          <Icon
            classDiv="_btn-icon"
            classSvg="track__time-svg"
            iconName="like"
            alt="time"
          />

          <span className={styles.track__time}>{time}</span>
        </div>
      </div>
    </div>
  )
}
export default PlayListItem
