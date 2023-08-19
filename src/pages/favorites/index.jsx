import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import MainPage from '../../Components/MainPage/MainPage'
import { addLike } from '../../util'
import {
  loadPlayList,
  setIsLoading,
  setShuffledPlaylist,
  setCurrentPage,
  setErrorMessage,
} from '../../store/actions/creators/pleer'
import { useGetFavoritesQuery } from '../../RTKapi'
import UserInContext from '../../contexts/context'
import { FAVORITES } from '../../const'

export default function Main() {
  const dispatch = useDispatch()
  dispatch(setCurrentPage(FAVORITES))
  dispatch(setIsLoading(true))
  const userInContext = useContext(UserInContext)

  const logout = () => {
    localStorage.removeItem('userPleer')
    userInContext.setUser(undefined)
  }
  const { data, isLoading, error } = useGetFavoritesQuery()
  if (error) {
    if (error.status === 401) {
      logout()
    } else dispatch(setErrorMessage(error.message))
  }

  const playList =
    !isLoading && !error?.message && data?.length
      ? addLike(data, FAVORITES)
      : undefined
  console.log(playList)
  if (!isLoading && !error?.message && data?.length) {
    dispatch(loadPlayList(playList))
    dispatch(setShuffledPlaylist())
    dispatch(setIsLoading(false))
  }
  return <MainPage />
}
