import { useState, useMemo, useEffect } from 'react'
import AppRouts from './routes'
import styles from './App.module.css'
import { UserInContext } from './contexts/context'

export default function App() {
  const [user, setUser] = useState(null)
  const [isLogined, setIsLogined] = useState(false)
  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  )
  useEffect(() => {
    const userInStorage = localStorage.getItem('userPleer')
    console.log(userInStorage)
    console.log(user)
    console.log(`App setUser b:  user- ${user}`)
    if (userInStorage) {
      setUser(JSON.parse(userInStorage))
      setIsLogined(true)
      console.log(`App setUser:  user- ${user}`)
    }
  }, [])
  return (
    <UserInContext.Provider value={value}>
      <div className={styles.container}>
        <AppRouts isLogined={isLogined} />
        {/* <AppRouts user={user} setUser={setUser} /> */}
      </div>
    </UserInContext.Provider>
  )
}
