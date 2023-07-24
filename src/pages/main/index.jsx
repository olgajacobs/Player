import { useState, useEffect } from 'react'
import LeftBlockMenu from '../../Components/LeftBlockMenu/LeftBlockMenu'
import CenterBlock from '../../Components/CenterBlock/CenterBlock'
import Footer from '../../Components/Footer/Footer'
import RightBlock from '../../Components/RightBlock/RightBlock'
import { getPlayList } from '../../api'
import styles from './main.module.css'

function Main({ setUser }) {
  const [isLoading, setLoading] = useState(true)
  const [isFooterClosed, setFooterClosed] = useState(true)
  const [playList, setPlayList] = useState({})

  const fillPlayList = async () => {
    try {
      setPlayList(await getPlayList())
      console.log('fillPlayList------------------')
      console.log(playList)
      console.log('fillPlayList-------------------')
      console.log('isLoading-------------------')
      setLoading(false)
      console.log('isLoading-------------------')
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    fillPlayList()
    console.log('Main-------------------')
    console.log(playList)
    console.log('Main-------------------')
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <LeftBlockMenu loading={isLoading} setUser={setUser} />
        <CenterBlock
          isLoading={isLoading}
          playList={playList}
          setFooterClosed={setFooterClosed}
        />
        <RightBlock loading={isLoading} />
      </div>
      {isFooterClosed && <Footer isLoading={isLoading} />}

      {isLoading && (
        <div className={styles.shadow}>
          <p>Loading...</p>
        </div>
      )}
    </div>
  )
}

export default Main
