import Icon from "../../Icon/Icon";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.main}>
      <Icon classDiv="" classSvg="search__svg" iconName="search" alt="" />
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}
export default Search;
