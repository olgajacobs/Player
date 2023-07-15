import Cookies from 'js-cookie'

import { NavLink, useNavigate } from 'react-router-dom'
import styles from './login.module.css'

function Login({ setUser }) {
  const navigate = useNavigate()
  const buttonClick = () => {
    if (!Cookies.get('token')) Cookies.set('token', 'Ivanov')
    const cookies = Cookies.get('token')
    setUser('Ivanov')
    console.log(`Login before: cookies- ${cookies} `)
    navigate('/')
    const cookies2 = Cookies.get('token')
    console.log(`Login after:  cookies2- ${cookies2} `)
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
