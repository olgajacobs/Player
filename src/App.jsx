import { useState, useMemo } from 'react'
import AppRouts from './routes'
import styles from './App.module.css'
import { UserInContext } from './contexts/context'

export default function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('userPleer'))
  )

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  )

  return (
    <UserInContext.Provider value={value}>
      <div className={styles.container}>
        <AppRouts isLogined={Boolean(user)} />
      </div>
    </UserInContext.Provider>
  )
}
