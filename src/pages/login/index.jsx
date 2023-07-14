import Cookies from 'js-cookie'
// import { NavLink } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './login.module.css'

function Login({ setUser }) {
  const navigate = useNavigate()
  const buttonClick = () => {
    if (!Cookies.get('RegisteredUser')) Cookies.set('RegisteredUser', 'Ivanov')
    setUser('Ivanov')
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Страница логина</h1>
        <button
          type="button"
          className={styles.button}
          onClick={() => buttonClick()}
        >
          Войти
        </button>
        <NavLink className={styles.link} to="/registration">
          Перейти к регистрации
        </NavLink>
      </div>
    </div>
  )
}

export default Login
