import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LeftBlockMenu from '../LeftBlockMenu/LeftBlockMenu'
import CenterBlock from '../CenterBlock/CenterBlock'
import Footer from '../Footer/Footer'
import RightBlock from '../RightBlock/RightBlock'
import { getPlayList } from '../../api'
import styles from './MainPage.module.css'
import { IsLoading } from '../../contexts/context'
import {
  loadPlayList,
  setShuffledPlaylist,
} from '../../store/actions/creators/pleer'
import { showFooterSelector } from '../../store/selectors/pleer'
import { useGetTracksQuery } from '../../RTKapi'
import { PLAYLIST,FAVORITES } from '../../const'

export default function MainPage({page}) {
  const [isLoading, setLoading] = useState(true)

  //   const [currentSong, setCurrentSong] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const dispatcher = useDispatch()
  const showFooter = useSelector(showFooterSelector)

  const {data}=useGetTracksQuery()
  console.log("---------------------")
  const fillPlayList = async () => {
    let newPlaylist=null
    try {
      switch (page) {
        case PLAYLIST:{
          newPlaylist = await getPlayList()
          break}
          case FAVORITES:{
         
           newPlaylist=[...data]
          break}
      
        default:
          break;
      }
      dispatcher(loadPlayList(newPlaylist))
      dispatcher(setShuffledPlaylist())
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
        <IsLoading.Provider value={isLoading}>
          <LeftBlockMenu />
          <CenterBlock />
          <RightBlock />
        </IsLoading.Provider>
      </div>
      {showFooter && <Footer />}

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
