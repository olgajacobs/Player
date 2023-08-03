import { useState, useMemo, useEffect } from 'react'
import AppRouts from './routes'
import styles from './App.module.css'
import { UserInContext } from './contexts/context'

export default function App() {
  const [user, setUser] = useState(null)
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
    if (userInStorage) setUser(userInStorage)
    console.log(`App setUser:  user- ${user}`)
  }, [])
  return (
    <UserInContext.Provider value={value}>
      <div className={styles.container}>
        <AppRouts user={user} />
        {/* <AppRouts user={user} setUser={setUser} /> */}
      </div>
    </UserInContext.Provider>
  )
}
