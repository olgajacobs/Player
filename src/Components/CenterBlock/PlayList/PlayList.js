// import React from "react";
import styles from './PlayList.module.css'
import PlayListItem from './PlayListItem/PlayListItem'
import Icon from '../../Icon/Icon'
// Подготовка тестового плейлиста
import tempPlayList from '../../../tempPlayList'

function PlayList({ loading }) {
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
  let playList

  // const emptyArray = new Array(8).fill('');
  playList = loading
    ? Array(4)
        .fill('')
        .map(() => <PlayListItem loading={loading} />)
    : (playList = tempPlayList.map((song) => (
        <PlayListItem
          titleName={song.name}
          authorName={song.author}
          albumName={song.album}
          time={timeFormat(song.duration_in_seconds)}
          key={song.id}
        />
      )))

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

      <div className={styles.content__playlist}>{playList}</div>
    </div>
  )
}
export default PlayList
