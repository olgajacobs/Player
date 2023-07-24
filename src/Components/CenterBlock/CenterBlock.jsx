import Search from './Search/Search'
import Filter from './Filter/Filter'
import PlayList from './PlayList/PlayList'

import styles from './CenterBlock.module.css'

function CenterBlock({ isLoading, playList, setFooterClosed }) {
  return (
    <div className={styles.main}>
      <Search />
      <h2 className={styles.header}>Треки</h2>

      <Filter />
      <PlayList
        isLoading={isLoading}
        playList={playList}
        setFooterClosed={setFooterClosed}
      />
    </div>
  )
}
export default CenterBlock
