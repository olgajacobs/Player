import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useAddFavoriteMutation, useDeleteFavoriteMutation } from '../RTKapi'
import { setErrorMessage } from '../store/slices/pleer'
import UserInContext from '../contexts/context'

const changeLike = (isLiked) => {
  const dispatch = useDispatch()
  const userInContext = useContext(UserInContext)
  const logout = () => {
    console.log('LogoutBegin')
    localStorage.removeItem('userPleer')
    userInContext.setUser(undefined)
    console.log('LogoutFinished')
  }
  const useMutation = isLiked
    ? useDeleteFavoriteMutation
    : useAddFavoriteMutation

  const [changeLikes, { isLoading }] = useMutation()

  const lox = async (clickedTrack) => {
    const user = JSON.parse(localStorage.getItem('userPleer'))
    const queryParam = clickedTrack.isLiked
      ? { id: clickedTrack.id, body: JSON.stringify(user) }
      : { id: clickedTrack.id }

    console.log('ChangeBegin')
    try {
      await changeLikes(queryParam).unwrap()
      console.log('ChangeAfter')
    } catch (e) {
      // if (error) {
      console.log('ChangeError')
      console.log(e.status)
      console.log(isLoading)

      if (e.status === 401 && !isLoading) {
        logout()
      } else dispatch(setErrorMessage({ errorMessage: e.message }))
      // }
    }
  }

  return lox
}
export default changeLike
