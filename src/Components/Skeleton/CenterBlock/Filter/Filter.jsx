import styles from './Filter.module.css'

export default function Filter() {
  return (
    <div className={styles.main}>
      <div className={styles.filter__title}>Искать по:</div>
      <div className={styles.div__button}>
        <button type="button" className={styles.filter__button}>
          Исполнителю
        </button>
      </div>
      <div className={styles.div_button}>
        <button type="button" className={styles.filter__button}>
          Жанру
        </button>
      </div>
      <div className={styles.div__button}>
        <button type="button" className={styles.filter__button}>
          Году выпуска
        </button>
      </div>
    </div>
  )
}
