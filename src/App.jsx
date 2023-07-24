import { useState } from 'react'
import Cookies from 'js-cookie'
import AppRouts from './routes'
import styles from './App.module.css'

function App() {
  const [user, setUser] = useState(Cookies.get('token'))

  return (
    <div className={styles.container}>
      <AppRouts user={user} setUser={setUser} />
    </div>
  )
}

export default App
