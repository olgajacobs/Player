import { useDispatch } from 'react-redux'
import MainPage from '../../Components/MainPage/MainPage'
import Skeleton from '../../Components/Skeleton/Skeleton'
import { addLike } from '../../util'
import { loadPlayList } from '../../store/slices/pleer'
import { useGetFavoritesQuery } from '../../RTKapi'
import { FAVORITES } from '../../const'

export default function Main() {
  const dispatch = useDispatch()
  const { data, error, isLoading, isError, isSuccess } = useGetFavoritesQuery()
  console.log(isLoading, isError, isSuccess)
  if (isLoading) {
    return <Skeleton isLoading={isLoading} />
  }
  if (isError) {
    return <Skeleton errorMessage={error.error} />
  }
  if (isSuccess) {
    const playList = addLike(data)
    dispatch(loadPlayList({ playList, currentPage: FAVORITES }))
    return <MainPage />
  }

  return <Skeleton errorMessage="Прочие ошибки" />
}
