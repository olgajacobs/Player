// import React from "react";
import { useSelector } from 'react-redux'
import styles from './TrackPlay.module.css'
import Icon from '../../../Icon/Icon'
import { currentTrackSelector } from '../../../../store/selectors/pleer'

function TrackPlay() {
  const currentSong = useSelector(currentTrackSelector)
  return (
    <div className={styles.main}>
      <div className={styles.track__playBlock}>
        <Icon
          classDiv="track-play__image"
          classSvg="track-play__svg"
          iconName="note"
          alt="music"
        />
        <div
          className={`${styles.track__playAuthor} ${styles.track__playAuthor__link}`}
        >
          {currentSong.name}
        </div>
        <div
          className={`${styles.track__playAlbum} ${styles.track__playAlbum__link}`}
        >
          {currentSong.author}
        </div>
      </div>
      <div className={styles.like__dislike}>
        <Icon
          classDiv="track-play__like _btn-icon"
          classSvg="track-play__like-svg"
          iconName="like"
          alt="like"
        />
        <Icon
          classDiv="track-play__dislike _btn-icon"
          classSvg="track-play__dislike-svg"
          iconName="dislike"
          alt="dislike"
        />
      </div>
    </div>
  )
}
export default TrackPlay
