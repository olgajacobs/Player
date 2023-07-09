import { useState, useEffect } from 'react'
import styles from './App.module.css'
import LeftBlockMenu from './Components/LeftBlockMenu/LeftBlockMenu'
import CenterBlock from './Components/CenterBlock/CenterBlock'
import Footer from './Components/Footer/Footer'
import RightBlock from './Components/RightBlock/RightBlock'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  })
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <LeftBlockMenu loading={loading} />

        <CenterBlock loading={loading} />
        <RightBlock loading={loading} />
      </div>
      <Footer loading={loading} />

      {loading && (
        <div className={styles.shadow}>
          <p>Loading...</p>
        </div>
      )}
    </div>
  )
}

export default App
