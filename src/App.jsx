import { useState, useEffect } from 'react'
// import { useState } from 'react'

import Cookies from 'js-cookie'
import AppRouts from './routes'
import styles from './App.module.css'

function App() {
  const [user, setUser] = useState(Cookies.get('token'))

  useEffect(() => {
    const cookies = Cookies.get('token')
    // if (cookies !== user) setUser(cookies)
    console.log(`App uE: cookies- ${cookies} user- ${user}`)
  })
  const isLogined = Boolean(Cookies.get('token'))
  console.log(`App: isLogined- ${isLogined} user- ${user}`)
  return (
    <div className={styles.container}>
      <AppRouts
        setUser={setUser}
        user={user}
        isLogined={Boolean(Cookies.get('token'))}
      />
    </div>
  )
}

export default App
