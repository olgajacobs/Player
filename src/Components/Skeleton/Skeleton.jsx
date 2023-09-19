import LeftBlock from './LeftBlock/LeftBlock'
import CenterBlock from './CenterBlock/CenterBlock'
import RightBlock from './RightBlock/RightBlock'
import styles from './Skeleton.module.css'

export default function Skeleton({ isLoading = false, errorMessage = null }) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <LeftBlock />
        <CenterBlock />
        <RightBlock />
      </div>

      <div className={styles.shadow}>
        {isLoading && <p className={styles.loading}>Loading...</p>}
        {errorMessage && (
          <div>
            <p className={styles.error}>
              Не удалось загрузить плейлист, попробуйте позже!
            </p>
            <p className={styles.error}>{`Ошибка: ${errorMessage}`}</p>
          </div>
        )}
      </div>
    </div>
  )
}
