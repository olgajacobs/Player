import { useDispatch } from 'react-redux'
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  } from '../RTKapi'
import { setErrorMessage } from '../store/actions/creators/pleer'
import UserInContext from '../contexts/context'


const useChangeLike = (isLiked) => {
  const dispatch = useDispatch()
  const logout = () => {
    localStorage.removeItem('userPleer')
    UserInContext.setUser(undefined)
  }
  const useMutation = isLiked
    ? useDeleteFavoriteMutation
    : useAddFavoriteMutation

  const [changeLikes, { error}] = useMutation()

  const lox = async (clickedTrack) => {
    const user = JSON.parse(localStorage.getItem('userPleer'))
    const queryParam = clickedTrack.isLiked
      ? { id: clickedTrack.id, body: JSON.stringify(user) }
      : { id: clickedTrack.id }

    await changeLikes(queryParam).unwrap()
    if (error) {
      if (error.status === 401) {
       logout()
      } else dispatch(setErrorMessage(error.message))
    }
  }

  return lox
}
export default useChangeLike