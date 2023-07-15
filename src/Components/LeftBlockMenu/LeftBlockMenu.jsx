import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './LeftBlockMenu.module.css'

function LeftBlockMenu({ loading = false }) {
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => setVisible(!visible)

  return (
    <nav className={styles.main}>
      <div className={styles.logo}>
        <img className={styles.logo__image} src="../img/logo.png" alt="logo" />
      </div>
      {loading ? (
        <section>
          <div className={styles.burger}>
            <span className={styles.burger__line} />
            <span className={styles.burger__line} />
            <span className={styles.burger__line} />
          </div>
          <div className={styles.menu}>
            <ul className={styles.menu__items}>
              <li className={styles.menu__item}>Главное</li>
              <li className={styles.menu__item}>Mой плейлист</li>
              <li className={styles.menu__item}>Войти</li>
            </ul>
          </div>
        </section>
      ) : (
        <section>
          <div
            className={styles.burger}
            onClick={toggleVisibility}
            role="button"
            tabIndex="0"
            onKeyUp={() => {}}
          >
            <span className={styles.burger__line} />
            <span className={styles.burger__line} />
            <span className={styles.burger__line} />
          </div>
          {visible && (
            <div className={styles.menu}>
              <ul className={styles.menu__items}>
                <li className={styles.menu__item}>
                  <NavLink className={styles.menu__link} to="/">
                    Главная
                  </NavLink>
                </li>
                <li className={styles.menu__item}>
                  <NavLink className={styles.menu__link} to="/favorites">
                    Мой плейлист
                  </NavLink>
                </li>
                <li className={styles.menu__item}>
                  <NavLink className={styles.menu__link} to="/login">
                    Выйти
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </section>
      )}
    </nav>
  )
}

export default LeftBlockMenu
