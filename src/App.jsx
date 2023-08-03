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

    if (userInStorage) {
      setUser(JSON.parse(userInStorage))
      //   setIsLogined(true)
      console.log(`App setUser:  user- ${user}`)
    }
  }, [])
  useEffect(() => {
    if (user) {
      setIsLogined(true)
      console.log(`App setisLogined:  user- ${user}`)
    }
  }, [user])
  return (
    <UserInContext.Provider value={value}>
      <div className={styles.container}>
        <AppRouts isLogined={isLogined} />
        {/* <AppRouts user={user} setUser={setUser} /> */}
      </div>
    </UserInContext.Provider>
  )
}
