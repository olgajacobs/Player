import { useDispatch } from 'react-redux'
import MainPage from '../../Components/MainPage/MainPage'
import { FAVORITES } from '../../const'
import { setCurrentPage } from '../../store/actions/creators/pleer'

export default function Main() {
  const dispatcher = useDispatch()
  dispatcher(setCurrentPage(FAVORITES))
  return <MainPage />
}
