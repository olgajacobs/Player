import { NavLink } from 'react-router-dom'
import styles from './favorites.module.css'

function Favorites() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Мой плейлист</h1>

        <NavLink className={styles.link} to="/">
          Вернуться на главную страницу
        </NavLink>
      </div>
    </div>
  )
}

export default Favorites
