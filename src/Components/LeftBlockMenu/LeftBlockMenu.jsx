import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import UserInContext from '../../contexts/context'
import styles from './LeftBlockMenu.module.css'

function LeftBlockMenu() {
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => setVisible(!visible)
  const userInContext = useContext(UserInContext)

  const logout = () => {
    localStorage.removeItem('userPleer')
    userInContext.setUser(undefined)
  }

  return (
    <nav className={styles.main}>
      <div className={styles.logo}>
        <img className={styles.logo__image} src="../img/logo.png" alt="logo" />
      </div>

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
    </nav>
  )
}

export default LeftBlockMenu
