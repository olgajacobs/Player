// import React from "react";
import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
import styles from './TrackPlay.module.css'
import Icon from '../../../Icon/Icon'
import { currentTrackSelector } from '../../../../store/selectors/pleer'
import changeLike from '../../../../customHooks/customHooks'

function TrackPlay() {
  //   const [updateLike, setUpdateLike] = useState(false)
  const currentTrack = useSelector(currentTrackSelector)
  const disLike = changeLike(true)
  const like = changeLike(false)
  console.log('-----------------------------')
  console.log(currentTrack.isLiked)
  //   useEffect(() => {
  //     setUpdateLike(!updateLike)
  //   }, [currentTrack.isLiked])
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
          {currentTrack.name}
        </div>
        <div
          className={`${styles.track__playAlbum} ${styles.track__playAlbum__link}`}
        >
          {currentTrack.author}
        </div>
      </div>
      <div className={styles.like__dislike}>
        <Icon
          classDiv="track-play__like _btn-icon"
          classSvg={`track__time-svg ${currentTrack.isLiked ? 'liked' : ''}`}
          song={currentTrack}
          action={like}
          iconName="like"
          alt="like"
        />
        <Icon
          classDiv="track-play__dislike _btn-icon"
          classSvg="track-play__dislike-svg"
          iconName="dislike"
          song={currentTrack}
          action={disLike}
          alt="dislike"
        />
      </div>
    </div>
  )
}
export default TrackPlay
