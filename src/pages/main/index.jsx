import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import MainPage from '../../Components/MainPage/MainPage'
import { addLike } from '../../util'
import {
  loadPlayList,
  setIsLoading,
  setCurrentPage,
  setErrorMessage,
} from '../../store/slices/pleer'
import { useGetPlayListQuery } from '../../RTKapi'
import { PLAYLIST } from '../../const'

export default function Main() {
  const [renderWasEnded, setRenderWasEnded] = useState(false)
  const dispatch = useDispatch()
  dispatch(setCurrentPage({ currentPage: PLAYLIST }))

  dispatch(setIsLoading({ isLoading: true }))
  const { data, isLoading, isError, error } = useGetPlayListQuery()
  console.log(`Начало загрузки D=${data} L=${isLoading} E=${isError}`)
  if (renderWasEnded) {
    console.log(`Обработка после рендера D=${data} L=${isLoading} E=${isError}`)
    if (isError) {
      dispatch(setIsLoading({ isLoading: false }))
      dispatch(setErrorMessage({ errorMessage: error.error }))
      console.dir(error.error)
    } else {
      const playList =
        !isLoading && !error?.message && data?.length
          ? addLike(data)
          : undefined
      if (!isLoading && !isError && data?.length) {
        dispatch(loadPlayList({ playList }))
        dispatch(setIsLoading({ isLoading: false }))
      }
    }
    useEffect(() => {
      console.log('MAIN was loaded')
      setRenderWasEnded(true)
    }, [])
  }
  return <MainPage />
}
