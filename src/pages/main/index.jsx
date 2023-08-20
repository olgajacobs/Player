import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import MainPage from '../../Components/MainPage/MainPage'
import { addLike } from '../../util'
import {
  loadPlayList,
  setIsLoading,
  setShuffledPlaylist,
  setCurrentPage,
  setErrorMessage,
} from '../../store/actions/creators/pleer'
import { useGetPlayListQuery } from '../../RTKapi'
import { PLAYLIST } from '../../const'

export default function Main() {
  const [renderWasEnded, setRenderWasEnded] = useState(false)
  const dispatch = useDispatch()
  dispatch(setCurrentPage(PLAYLIST))

  dispatch(setIsLoading(true))
  const { data, isLoading, error } = useGetPlayListQuery()
  if (renderWasEnded) {
    if (error) dispatch(setErrorMessage(error.message))
    const playList =
      !isLoading && !error?.message && data?.length ? addLike(data) : undefined
    if (!isLoading && !error?.message && data?.length) {
      dispatch(loadPlayList(playList))
      dispatch(setShuffledPlaylist())
      dispatch(setIsLoading(false))
    }
  }
  useEffect(() => {
    setRenderWasEnded(true)
  }, [])
  return <MainPage />
}
