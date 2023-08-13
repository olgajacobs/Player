import { useDispatch } from 'react-redux'
import MainPage from '../../Components/MainPage/MainPage'
import { PLAYLIST } from '../../const'
import { setCurrentPage } from '../../store/actions/creators/pleer'

export default function Main() {
  const dispatch = useDispatch()
  dispatch(setCurrentPage(PLAYLIST))
  return <MainPage />
}
