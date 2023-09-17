import { useSelector } from 'react-redux'
import LeftBlockMenu from '../LeftBlockMenu/LeftBlockMenu'
import CenterBlock from '../CenterBlock/CenterBlock'
import Footer from '../Footer/Footer'
import RightBlock from '../RightBlock/RightBlock'
import styles from './MainPage.module.css'
import { showFooterSelector } from '../../store/selectors/pleer'
// import { loadPlayList } from '../../store/slices/pleer'

export default function MainPage({ playList, currentPage }) {
  console.log('MainPage')
  const showFooter = useSelector(showFooterSelector)
  //   const dispatch = useDispatch()
  //   dispatch(loadPlayList({ playList, currentPage }))
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <LeftBlockMenu />
        <CenterBlock playList={playList} currentPage={currentPage} />
        <RightBlock />
      </div>
      {showFooter && <Footer />}
    </div>
  )
}
