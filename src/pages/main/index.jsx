import { useState, useEffect } from 'react'
import LeftBlockMenu from '../../Components/LeftBlockMenu/LeftBlockMenu'
import CenterBlock from '../../Components/CenterBlock/CenterBlock'
import Footer from '../../Components/Footer/Footer'
import RightBlock from '../../Components/RightBlock/RightBlock'
import { getPlayList } from '../../api'
import styles from './main.module.css'

function Main({ setUser }) {
  const [isLoading, setLoading] = useState(true)
  //   const [isFooterClosed, setFooterClosed] = useState(true)
  const [playList, setPlayList] = useState({})
  const [currentSong, setCurrentSong] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const fillPlayList = async () => {
    try {
      setPlayList(await getPlayList())
      setLoading(false)
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  useEffect(() => {
    fillPlayList()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <LeftBlockMenu loading={isLoading} setUser={setUser} />
        <CenterBlock
          isLoading={isLoading}
          playList={playList}
          setCurrentSong={setCurrentSong}
        />
        <RightBlock loading={isLoading} />
      </div>
      {currentSong && <Footer currentSong={currentSong} />}

      {isLoading && !errorMessage && (
        <div className={styles.shadow}>
          <p>Loading...</p>
        </div>
      )}
      {errorMessage && (
        <div className={styles.shadow}>
          <p>Ошибка при загрузке плейлиста</p>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  )
}

export default Main
