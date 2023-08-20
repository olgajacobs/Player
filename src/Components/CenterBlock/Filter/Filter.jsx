import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import FilterItem from './FilterItem/FilterItem'
import { playListSelector } from '../../../store/selectors/pleer'
import styles from './Filter.module.css'

export default function Filter() {
  const [buttons, setButtons] = useState([false, false, false])
  const playList = useSelector(playListSelector)
  //   let [songFilter, yearFilter, genreFilter] = [['empty'], ['1958'], ['empty']]

  if (!playList.length) return <div />

  const songFilter = playList.map((song) => (
    <a className={styles.filterItems} href="http://" key={uuidv4()}>
      {song.name}
    </a>
  ))
  let yearFilter = Array.from(
    new Set(playList.map((song) => song?.release_date?.substring(0, 4))),
  ).sort()
  yearFilter = yearFilter.map((releaseData) => (
    <a className={styles.filterItems} href="http://" key={uuidv4()}>
      {releaseData}
    </a>
  ))
  let genreFilter = Array.from(
    new Set(playList.map((song) => song.genre)),
  ).sort()
  genreFilter = genreFilter.map((genre) => (
    <a className={styles.filterItems} href="http://" key={uuidv4()}>
      {genre}
    </a>
  ))

  return (
    <div className={styles.main}>
      <div className={styles.filter__title}>Искать по:</div>
      <FilterItem
        buttons={buttons}
        setButtons={setButtons}
        id={0}
        menuList={songFilter}
        buttonName="исполнителю"
      />
      <FilterItem
        buttons={buttons}
        setButtons={setButtons}
        id={1}
        menuList={yearFilter}
        buttonName="году выпуска"
      />
      <FilterItem
        buttons={buttons}
        setButtons={setButtons}
        id={2}
        menuList={genreFilter}
        buttonName="жанру"
      />
    </div>
  )
}
