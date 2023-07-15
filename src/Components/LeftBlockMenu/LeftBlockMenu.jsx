import { useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'
import styles from './LeftBlockMenu.module.css'

function LeftBlockMenu({ loading = false, setUser }) {
  const [visible, setVisible] = useState(true)
  const navigate = useNavigate()
  const toggleVisibility = () => setVisible(!visible)
  const logout = () => {
    if (Cookies.get('token')) {
      Cookies.remove('token')
      setUser(null)
      navigate('/login')
    }
  }
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
              <li className={styles.menu__item}>Главная</li>
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
        </section>
      )}
    </nav>
  )
}

export default LeftBlockMenu
