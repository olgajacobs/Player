// import React from "react";
import styles from "./TrackPlay.module.css";
import Icon from "../../../Icon/Icon";

function TrackPlay({ loading }) {
  const author = loading ? "    " : "Ты та.";
  const album = loading ? "     " : "Баста";
  if (loading)
    return (
      <div className={styles.main}>
        <div className={styles.track__playBlock}>
          <Icon
            classDiv="track-play__image"
            classSvg="track-play__svg"
            iconName="note"
            alt="music"
          />
          <div className={styles.track__playAuthor__grey} />
          <div className={styles.track__playAlbum__grey} />
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
    );
  return (
    <div className={styles.main}>
      <div className={styles.track__playBlock}>
        <Icon
          classDiv="track-play__image"
          classSvg="track-play__svg"
          iconName="note"
          alt="music"
        />
        <div className={styles.track__playAuthor}>
          <a className={styles.track__playAuthor__link} href="http://">
            {author}.
          </a>
        </div>
        <div className={styles.track__playAlbum}>
          <a className={styles.track__playAlbum__link} href="http://">
            {album}
          </a>
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
  );
}
export default TrackPlay;
