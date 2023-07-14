import { useEffect, useState } from 'react'
// import { useState } from 'react'

import Cookies from 'js-cookie'
import AppRouts from './routes'
import styles from './App.module.css'
// import NavBar from './Components/protected-route'

function App() {
  const [user, setUser] = useState(Cookies.get('RegisteredUser'))

  if (!Cookies.get('FirstLoading')) Cookies.set('FirstLoading', true)
  //   if (Cookies.get('RegisteredUser')) Cookies.remove('RegisteredUser')

  useEffect(
    () => () => {
      if (Cookies.get('RegisteredUser')) Cookies.remove('RegisteredUser')
      if (Cookies.get('FirstLoading')) Cookies.remove('FirstLoading')
    },
    []
  )

  //   const handleLogin = () => setUser({ login: 'tradam' })
  //   const handleLogout = () => setUser(null)

  return (
    <div className={styles.container}>
      {/* <NavBar
        user={user}
        onAuthButtonClick={user ? handleLogout : handleLogin}
      /> */}
      <AppRouts setUser={setUser} user={user} />
    </div>
  )
}

export default App
