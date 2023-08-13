// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import styles from './PlayList.module.css'
import PlayListItem from './PlayListItem/PlayListItem'
import Icon from '../../Icon/Icon'
import { currentPageSelector } from '../../../store/selectors/pleer'
import { refreshAccessToken } from '../../../api'
import { useGetFavoritesQuery, useGetPlayListQuery } from '../../../RTKapi'
import { FAVORITES } from '../../../const'
import {
  setErrorMessage,
  setIsLoading,
} from '../../../store/actions/creators/pleer'
import { addLike } from '../../../util'

function PlayList() {
  const dispatch = useDispatch()
  const currentPage = useSelector(currentPageSelector)
  let playListItems = Array(5)
    .fill('')
    .map(() => <PlayListItem flag={false} key={uuidv4()} />)
  const renewAccessToken = async () => {
    try {
      const newToken = await refreshAccessToken(
        JSON.parse(localStorage.getItem('refreshToken'))
      )
      localStorage.setItem('accessToken', JSON.stringify(newToken?.access))
    } catch (error2) {
      dispatch(setErrorMessage(error2.message))
    }
  }

  let useQuery = useGetPlayListQuery
  switch (currentPage) {
    case FAVORITES:
      useQuery = useGetFavoritesQuery
      break
    default:
      break
  }

  const { data, isLoading, error } = useQuery()
  if (error) {
    if (error.status === 401) {
      renewAccessToken()
    } else dispatch(setErrorMessage(error.message))
  } else {
    console.log(isLoading)
  }

  if (!isLoading && !error?.message && data?.length) {
    const playListWithLike = data ? addLike(data, currentPage) : undefined
    console.log(`+++++ playListLike ${playListWithLike}  `)
    console.log(`***** isLoading ${isLoading} ${data?.length} `)
    playListItems = playListWithLike.map((song) => (
      <PlayListItem flag={!isLoading} song={song} key={song.id} />
    ))
    dispatch(setIsLoading(false))
  }

  //   useEffect(() => {
  //     playListItems = data?.map((song) => (
  //       <PlayListItem song={song} key={song.id} />
  //     ))
  //     dispatch(setIsLoading(false))
  //   }, [isLoading])

  console.log(`PL isLoading ${isLoading} ${data?.length} ${error?.message}`)
  return (
    <div className={styles.main}>
      <div className={styles.content__title}>
        <div className={`${styles.content__titleCol} ${styles.col01}`}>
          ТРЕК
        </div>
        <div className={`${styles.content__titleCol} ${styles.col02}`}>
          ИСПОЛНИТЕЛЬ
        </div>
        <div className={`${styles.content__titleCol} ${styles.col03}`}>
          АЛЬБОМ
        </div>
        <Icon
          classDiv="content__titleCol col04"
          classSvg="playlist-title__svg"
          iconName="watch"
          alt="time"
        />
      </div>

      <div className={styles.content__playlist}>{playListItems}</div>
    </div>
  )
}
export default PlayList
