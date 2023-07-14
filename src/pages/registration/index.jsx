import { NavLink } from 'react-router-dom'
import styles from './registration.module.css'

function Registration() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Страница регистрации</h1>

        <NavLink className={styles.link} to="/">
          Перейти на главную страницу
        </NavLink>
      </div>
    </div>
  )
}

export default Registration
