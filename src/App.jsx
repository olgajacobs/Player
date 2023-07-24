import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import AppRouts from './routes'
import styles from './App.module.css'

function App() {
  //   const isLogined = Boolean(Cookies.get('token'))
  //   console.log(`App: isLogined- ${isLogined} `)
  const [user, setUser] = useState(Cookies.get('token'))
  useEffect(() => {
    console.log('App.js==============')
  }, [])
  return (
    <div className={styles.container}>
      <AppRouts user={user} setUser={setUser} />
    </div>
  )
}

export default App
