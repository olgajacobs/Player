import Search from './Search/Search'
import Filter from './Filter/Filter'
import PlayList from './PlayList/PlayList'
import { PLAYLIST, FAVORITES } from '../../const'
import styles from './CenterBlock.module.css'

export default function CenterBlock({ page }) {
  return (
    <div className={styles.main}>
      <Search />
      {page === PLAYLIST && (
        <section>
          <h2 className={styles.header}>Треки</h2>
          <Filter />
        </section>
      )}
      {page === FAVORITES && (
        <section>
          <h2 className={styles.header}>Мой плейлист</h2>
        </section>
      )}
      <PlayList />
    </div>
  )
}
