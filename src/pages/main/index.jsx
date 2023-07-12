import { useState, useEffect } from 'react'
import LeftBlockMenu from '../../Components/LeftBlockMenu/LeftBlockMenu'
import CenterBlock from '../../Components/CenterBlock/CenterBlock'
import Footer from '../../Components/Footer/Footer'
import RightBlock from '../../Components/RightBlock/RightBlock'
import styles from './main.module.css'

function Main() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000)
    return () => clearTimeout(timer)
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

export default Main
