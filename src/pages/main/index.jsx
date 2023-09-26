// import { useDispatch } from 'react-redux'
import MainPage from '../../Components/MainPage/MainPage'
import Skeleton from '../../Components/Skeleton/Skeleton'
import { addLike } from '../../util'
// import { loadPlayList } from '../../store/slices/pleer'
import { useGetPlayListQuery } from '../../RTKapi'
import { PLAYLIST } from '../../const'

export default function Main() {
  //   const dispatch = useDispatch()
  const { data, error, isLoading, isError, isSuccess, isFetching } =
    useGetPlayListQuery()
  console.log(isLoading, isError, isSuccess, isFetching)

  if (isLoading) {
    return <Skeleton isLoading={isLoading} />
  }
  if (isError) {
    return <Skeleton errorMessage={error.error} />
  }
  if (isSuccess) {
    const playList = addLike(data, PLAYLIST)
    // dispatch(loadPlayList({ playList, currentPage: PLAYLIST }))
    console.log('MainStart')
    return <MainPage playList={playList} currentPage={PLAYLIST} />
  }

  return <Skeleton errorMessage="Прочие ошибки" />
}
