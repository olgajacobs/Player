import { useDispatch } from 'react-redux'
import MainPage from '../../Components/MainPage/MainPage'
import { addLike } from '../../util'
import { loadPlayList, setIsLoading, setShuffledPlaylist, setCurrentPage, setErrorMessage  } from '../../store/actions/creators/pleer'
import { useGetPlayListQuery } from '../../RTKapi'
import { PLAYLIST } from '../../const'


export default function Main() {
  const dispatch = useDispatch()
  dispatch(setCurrentPage(PLAYLIST))
  dispatch(setIsLoading(true))
  const { data, isLoading, error } = useGetPlayListQuery()
  if (error) dispatch(setErrorMessage(error.message))
  const newPlaylist =
    !isLoading && !error?.message && data?.length
      ? addLike(data)
      : undefined
  if (!isLoading && !error?.message && data?.length) {
    dispatch(loadPlayList(newPlaylist))
    dispatch(setShuffledPlaylist())
    dispatch(setIsLoading(false))
  }
  return <MainPage />
}
