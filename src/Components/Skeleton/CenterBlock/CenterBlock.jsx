import Search from './Search/Search'
import Filter from './Filter/Filter'
import PlayList from './PlayList/PlayList'
import styles from './CenterBlock.module.css'

export default function CenterBlock() {
  return (
    <div className={styles.main}>
      <Search />

      <section>
        <h2 className={styles.header}>Треки</h2>
        <Filter />
      </section>

      <PlayList />
    </div>
  )
}
