import { useSelector } from 'react-redux'
import LeftBlockMenu from '../LeftBlockMenu/LeftBlockMenu'
import CenterBlock from '../CenterBlock/CenterBlock'
import Footer from '../Footer/Footer'
import RightBlock from '../RightBlock/RightBlock'
import styles from './MainPage.module.css'
import { showFooterSelector } from '../../store/selectors/pleer'

export default function MainPage() {
  const showFooter = useSelector(showFooterSelector)
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <LeftBlockMenu />
        <CenterBlock />
        <RightBlock />
      </div>
      {showFooter && <Footer />}
    </div>
  )
}
