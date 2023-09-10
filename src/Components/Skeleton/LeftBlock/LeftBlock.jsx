import styles from './LeftBlock.module.css'

function LeftBlock() {
  return (
    <nav className={styles.main}>
      <div className={styles.logo}>
        <img className={styles.logo__image} src="../img/logo.png" alt="logo" />
      </div>

      <section className={styles.leftBlock}>
        <div>
          <div className={styles.burger}>
            <span className={styles.burger__line} />
            <span className={styles.burger__line} />
            <span className={styles.burger__line} />
          </div>

          <div className={styles.menu}>
            <ul className={styles.menu__items}>
              <li className={styles.menu__item}>Главная</li>
              <li className={styles.menu__item}>Мой плейлист</li>
              <li className={styles.menu__item}>Выйти</li>
            </ul>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default LeftBlock
