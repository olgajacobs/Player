import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import MainPage from '../../Components/MainPage/MainPage'
import { addLike } from '../../util'
import {
  loadPlayList,
  setIsLoading,
  setCurrentPage,
  setErrorMessage,
} from '../../store/slices/pleer'
import { useGetFavoritesQuery } from '../../RTKapi'
import UserInContext from '../../contexts/context'
import { FAVORITES } from '../../const'

export default function Main() {
  const dispatch = useDispatch()
  dispatch(setCurrentPage({ currentPage: FAVORITES }))
  dispatch(setIsLoading({ isLoading: true }))
  const userInContext = useContext(UserInContext)

  const logout = () => {
    localStorage.removeItem('userPleer')
    userInContext.setUser(undefined)
  }
  const { data, isLoading, error } = useGetFavoritesQuery()
  if (error) {
    if (error.status === 401 && !isLoading) {
      logout()
    } else dispatch(setErrorMessage({ errorMessage: error.message }))
  }

  const playList =
    !isLoading && !error?.message && data?.length
      ? addLike(data, FAVORITES)
      : undefined
  console.log(playList)
  if (!isLoading && !error?.message && data?.length) {
    dispatch(loadPlayList({ playList }))
    dispatch(setIsLoading({ isLoading: false }))
  }
  return <MainPage />
}
