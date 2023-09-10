import styles from './RightBlock.module.css'
import Icon from '../../Icon/Icon'

function RightBlock() {
  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <p className={styles.user__name} />
        <div className={styles.user__avatar} title="Выход">
          <Icon
            classDiv="exit__image"
            classSvg="exit__svg"
            iconName="exit"
            alt="exit"
          />
        </div>
      </div>
      <div className={styles.playlist__block}>
        <div className={styles.playlist} />
        <div className={styles.playlist} />
        <div className={styles.playlist} />
      </div>
    </div>
  )
}
export default RightBlock
