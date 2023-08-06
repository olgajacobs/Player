import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LeftBlockMenu from '../../Components/LeftBlockMenu/LeftBlockMenu'
import CenterBlock from '../../Components/CenterBlock/CenterBlock'
import Footer from '../../Components/Footer/Footer'
import RightBlock from '../../Components/RightBlock/RightBlock'
import { getPlayList } from '../../api'
import styles from './main.module.css'
import { IsLoading } from '../../contexts/context'
import { loadPlayList } from '../../store/actions/creators/pleer'
import { currentTrackSelector } from '../../store/selectors/pleer'

export default function Main() {
  const [isLoading, setLoading] = useState(true)
  const [playList, setPlayList] = useState({})
  //   const [currentSong, setCurrentSong] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const dispatch = useDispatch()
  const currentSong = useSelector(currentTrackSelector)
  const fillPlayList = async () => {
    try {
      const newPlaylist = await getPlayList()
      setPlayList(newPlaylist)
      setLoading(false)
      dispatch(loadPlayList(newPlaylist))
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
        <IsLoading.Provider value={isLoading}>
          <LeftBlockMenu />
          <CenterBlock playList={playList} />
          <RightBlock />
        </IsLoading.Provider>
      </div>
      {currentSong && <Footer currentSong={currentSong} />}

      {isLoading && !errorMessage && (
        <div className={styles.shadow}>
          <p className={styles.loading}>Loading...</p>
        </div>
      )}
      {errorMessage && (
        <div className={styles.shadow}>
          <div>
            <p className={styles.error}>
              Не удалось загрузить плейлист, попробуйте позже!
            </p>
            <p className={styles.error}>{`Ошибка: ${errorMessage}`}</p>
          </div>
        </div>
      )}
    </div>
  )
}
