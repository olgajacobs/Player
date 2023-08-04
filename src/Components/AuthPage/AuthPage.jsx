import { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as S from './AuthPage.styles'
import { registrateUser, autorizeUser } from '../../api'
import { UserInContext } from '../../contexts/context'

export default function AuthPage({ isLoginMode = false }) {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [isButtonBlocked, setIsButtonBlocked] = useState(false)

  const userInContext = useContext(UserInContext)
  const navigate = useNavigate()

  const registration = async () => {
    setIsButtonBlocked(true)
    try {
      const username = email
      const user = await registrateUser({ email, password, username })
      localStorage.setItem('userPleer', JSON.stringify(user))
      userInContext.setUser(user)
      navigate('/', { replace: true })
    } catch (apiError) {
      setError(apiError.message)
    } finally {
      setIsButtonBlocked(false)
    }
  }

  const handleRegister = async () => {
    if (!email) setError('Не заполнена почта')
    else if (!password) setError('Не заполнен пароль')
    else if (!repeatPassword) setError('Не заполнен повторный пароль')
    else if (password !== repeatPassword)
      setError(
        `Пароль: ${password} и повторный пароль ${repeatPassword} не совпадают`,
      )
    else registration()
  }

  const authorization = async () => {
    setIsButtonBlocked(true)
    try {
      const user = await autorizeUser({ email, password })
      localStorage.setItem('userPleer', JSON.stringify(user))
      userInContext.setUser(user)
      navigate('/', { replace: true })
    } catch (apiError) {
      setError(apiError.message)
    } finally {
      setIsButtonBlocked(false)
    }
  }

  const handleLogin = async () => {
    if (!email) setError('Не заполнена почта')
    else if (!password) setError('Не заполнен пароль')
    else authorization()
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                disabled={isButtonBlocked}
                onClick={() => handleLogin({ email, password })}
              >
                {isButtonBlocked ? 'Идет авторизация' : 'Войти'}
              </S.PrimaryButton>
              <Link to="/registration">
                <S.SecondaryButton disabled={isButtonBlocked}>
                  {isButtonBlocked ? 'Идет авторизация' : 'Зарегистрироваться'}
                </S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                disabled={isButtonBlocked}
                onClick={handleRegister}
              >
                {isButtonBlocked ? 'Идет регистрация' : 'Зарегистрироваться'}
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
