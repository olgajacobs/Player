// import { useState } from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LeftBlockMenu from '../LeftBlockMenu/LeftBlockMenu'
import CenterBlock from '../CenterBlock/CenterBlock'
import Footer from '../Footer/Footer'
import RightBlock from '../RightBlock/RightBlock'
import { refreshAccessToken } from '../../api'
import styles from './MainPage.module.css'
import {
  loadPlayList,
  setIsLoading,
  setShuffledPlaylist,
} from '../../store/actions/creators/pleer'
import { showFooterSelector } from '../../store/selectors/pleer'
import { useGetFavoritesQuery, useGetPlayListQuery } from '../../RTKapi'
import { PLAYLIST, FAVORITES } from '../../const'

export default function MainPage({ page }) {
  // const [isLoading, setLoading] = useState(true)
  let il = true
  //   const [currentSong, setCurrentSong] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const dispatcher = useDispatch()
  const showFooter = useSelector(showFooterSelector)

  const renewAccessToken = async () => {
    try {
      const newToken = await refreshAccessToken(
        JSON.parse(localStorage.getItem('refreshToken'))
      )
      localStorage.setItem('accessToken', JSON.stringify(newToken?.access))
    } catch (error2) {
      setErrorMessage(error2.message)
    }
  }
  if (!errorMessage) {
    let useQuery
    switch (page) {
      case PLAYLIST:
        useQuery = useGetPlayListQuery
        break
      case FAVORITES:
        useQuery = useGetFavoritesQuery
        break
      default:
        break
    }

    const { data, isLoading, error } = useQuery()
    il = isLoading
    if (error) {
      if (error.status === 401) {
        renewAccessToken()
      } else setErrorMessage(error.message)
    } else {
      console.log(isLoading)
      if (!isLoading) {
        dispatcher(loadPlayList(data))
        dispatcher(setShuffledPlaylist())
      }
    }
  }

  useEffect(() => {
    dispatcher(setIsLoading(false))
  }, [il])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <LeftBlockMenu />
        <CenterBlock page={page} />
        <RightBlock />
      </div>
      {showFooter && <Footer />}

      {il && !errorMessage && (
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
