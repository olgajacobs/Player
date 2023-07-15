import { NavLink } from 'react-router-dom'
import styles from './notfound.module.css'

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>404 ошибка !</h1>
        <h2>Запрошенная страница не найдена</h2>
        <NavLink className={styles.link} to="/">
          Вернуться на главную страницу
        </NavLink>
      </div>
    </div>
  )
}

export default NotFound
