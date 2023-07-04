import { useState } from "react";
import styles from "./Filter.module.css";
import FilterItem from "./FilterItem/FilterItem";

// Подготовка тестового плейлиста
import tempPlayList from "../../../tempPlayList";

const songFilter = tempPlayList.map((song) => (
  <a className={styles.filterItems} href="http://" key={song.id}>
    {song.name}
  </a>
));
let yearFilter = Array.from(
  new Set(tempPlayList.map((song) => song.release_date.substring(0, 4)))
).sort();
yearFilter = yearFilter.map((releaseData) => (
  <a className={styles.filterItems} href="http://" key={releaseData}>
    {releaseData}
  </a>
));
let genreFilter = Array.from(
  new Set(tempPlayList.map((song) => song.genre))
).sort();
genreFilter = genreFilter.map((genre) => (
  <a className={styles.filterItems} href="http://" key={genre}>
    {genre}
  </a>
));

function Filter() {
  const [buttons, setButtons] = useState([false, false, false]);
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
  );
}
export default Filter;
