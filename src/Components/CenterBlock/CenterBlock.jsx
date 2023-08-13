import { useSelector } from 'react-redux'
import Search from './Search/Search'
import Filter from './Filter/Filter'
import PlayList from './PlayList/PlayList'
import { PLAYLIST, FAVORITES } from '../../const'
import styles from './CenterBlock.module.css'
import { currentPageSelector } from '../../store/selectors/pleer'

export default function CenterBlock() {
  const currentPage = useSelector(currentPageSelector)
  return (
    <div className={styles.main}>
      <Search />
      {currentPage === PLAYLIST && (
        <section>
          <h2 className={styles.header}>Треки</h2>
          <Filter />
        </section>
      )}
      {currentPage === FAVORITES && (
        <section>
          <h2 className={styles.header}>Мой плейлист</h2>
        </section>
      )}
      <PlayList />
    </div>
  )
}
