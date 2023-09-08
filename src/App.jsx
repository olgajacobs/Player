import { useState, useMemo } from 'react'
import AppRouts from './routes'
import styles from './App.module.css'
import UserInContext from './contexts/context'

export default function App() {
  //   localStorage.setItem('userPleer', 'Olga')
  const [user, setUser] = useState(
    { userId: 1, userName: 'Olga' }
    // JSON.parse(localStorage.getItem('userPleer'))
  )

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  )
  console.log('App отработал')
  return (
    <UserInContext.Provider value={value}>
      <div className={styles.container}>
        <AppRouts isLogined={Boolean(user)} />
      </div>
    </UserInContext.Provider>
  )
}
