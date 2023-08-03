import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './LeftBlockMenu.module.css'
import { IsLoading, UserInContext } from '../../contexts/context'

function LeftBlockMenu() {
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => setVisible(!visible)
  const userInContext = useContext(UserInContext)
  const isLoading = useContext(IsLoading)
  const logout = () => {
    localStorage.removeItem('userPleer')
    userInContext.setUser(undefined)
  }

  return (
    <nav className={styles.main}>
      <div className={styles.logo}>
        <img className={styles.logo__image} src="../img/logo.png" alt="logo" />
      </div>
      {isLoading ? (
        <section>
          <div className={styles.burger}>
            <span className={styles.burger__line} />
            <span className={styles.burger__line} />
            <span className={styles.burger__line} />
          </div>
          <div className={styles.menu}>
            <ul className={styles.menu__items}>
              <li className={styles.menu__item}>Главная</li>
              <li className={styles.menu__item}>Mой плейлист</li>
              <li className={styles.menu__item}>Войти</li>
            </ul>
          </div>
        </section>
      ) : (
        <section className={styles.leftBlock}>
          <div>
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
                    <NavLink
                      className={styles.menu__link}
                      to="/login"
                      onClick={() => {
                        logout()
                      }}
                    >
                      Выйти
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </nav>
  )
}

export default LeftBlockMenu
