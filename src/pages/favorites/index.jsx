import { useContext } from 'react'
import MainPage from '../../Components/MainPage/MainPage'
import Skeleton from '../../Components/Skeleton/Skeleton'
import { addLike } from '../../util'
// import { loadPlayList } from '../../store/slices/pleer'
import { useGetFavoritesQuery } from '../../RTKapi'
import { FAVORITES } from '../../const'
import UserInContext from '../../contexts/context'

export default function Main() {
  //   const dispatch = useDispatch()
  const userInContext = useContext(UserInContext)
  const logout = () => {
    localStorage.removeItem('userPleer')
    userInContext.setUser(undefined)
  }
  const { data, error, isLoading, isError, isSuccess } = useGetFavoritesQuery()
  console.log(isLoading, isError, isSuccess)
  if (isLoading) {
    return <Skeleton isLoading={isLoading} />
  }
  if (isError) {
    if (error.status === 401) logout()
    return <Skeleton errorMessage={error.data.detail} />
  }
  if (isSuccess) {
    const playList = addLike(data, FAVORITES)
    // dispatch(loadPlayList({ playList, currentPage: FAVORITES }))
    return <MainPage playList={playList} currentPage={FAVORITES} />
  }

  return <Skeleton errorMessage="Прочие ошибки" />
}
