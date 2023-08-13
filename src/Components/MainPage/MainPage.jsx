import { useSelector } from 'react-redux'
import LeftBlockMenu from '../LeftBlockMenu/LeftBlockMenu'
import CenterBlock from '../CenterBlock/CenterBlock'
import Footer from '../Footer/Footer'
import RightBlock from '../RightBlock/RightBlock'
import styles from './MainPage.module.css'
import {
  errorMessageSelector,
  isLoadingSelector,
  showFooterSelector,
} from '../../store/selectors/pleer'

export default function MainPage() {
  const showFooter = useSelector(showFooterSelector)
  const isLoading = useSelector(isLoadingSelector)
  const errorMessage = useSelector(errorMessageSelector)

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <LeftBlockMenu />
        <CenterBlock />
        <RightBlock />
      </div>
      {showFooter && <Footer />}

      {isLoading && !errorMessage && (
        <div className={styles.shadow}>
          <p className={styles.loading}>Loading...</p>
        </div>
      )}
      {errorMessage && (
        <div className={styles.shadow}>
          <div>
            <p className={styles.error}>
              Не удалось загрузить плейлист, попробуйте позже!
            </p>
            <p className={styles.error}>{`Ошибка: ${errorMessage}`}</p>
          </div>
        </div>
      )}
    </div>
  )
}
