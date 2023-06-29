import Search from './Search/Search';
import Filter from './Filter/Filter';
import Content from './Content/Content';

import styles from './CenterBlock.module.css';

function CenterBlock(){
    return(
      <div className={styles.main}>
        <Search/>
             <h2 className={styles.header}>Треки</h2>

        <Filter/>
        <Content/>
      </div>
        
    )

    }
    export default CenterBlock