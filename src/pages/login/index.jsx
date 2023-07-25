import Cookies from 'js-cookie'

import { NavLink, useNavigate } from 'react-router-dom'
import styles from './login.module.css'

function Login({ setUser }) {
  const navigate = useNavigate()

  const buttonClick = () => {
    if (!Cookies.get('token'))
      Cookies.set(
        'token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwMTMxOTI0LCJpYXQiOjE2OTAxMzE2MjQsImp0aSI6IjQ2YjliNTFmZjE3ODRhY2E4MGU0OTNjYTVjNDg0YjA3IiwidXNlcl9pZCI6NzkxfQ.ktHEfxZrUFecStKU-U7NXecSP4YcWracHw98jopfLrY',
      )
    setUser('lox')
    navigate('/', { replace: true })

    // const cookies2 = Cookies.get('token')
    // console.log(`Login after:  cookies2- ${cookies2} `)
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
