// import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { currentPageSelector } from '../store/selectors/pleer'
import { renewAccessToken } from '../api'
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery,
  useGetPlayListQuery,
} from '../RTKapi'
import { FAVORITES } from '../const'
import {
  loadPlayList,
  setErrorMessage,
  setIsLoading,
  setShuffledPlaylist,
} from '../store/actions/creators/pleer'
import { addLike } from '../util'

export const useReadTracks = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector(currentPageSelector)

  let useQuery = useGetPlayListQuery
  switch (currentPage) {
    case FAVORITES:
      useQuery = useGetFavoritesQuery
      break
    default:
      break
  }

  const { data, isLoading, error } = useQuery()
  if (error) {
    if (error.status === 401) {
      renewAccessToken()
    } else dispatch(setErrorMessage(error.message))
  }

  const newPlaylist =
    !isLoading && !error?.message && data?.length
      ? addLike(data, currentPage)
      : undefined
  if (!isLoading && !error?.message && data?.length) {
    dispatch(loadPlayList(newPlaylist))
    dispatch(setShuffledPlaylist())
    dispatch(setIsLoading(false))
  }
  return { isLoading, error, newPlaylist }
}
export const useChangeLike = (clickedTrack) => {
  //   const dispatch = useDispatch()

  console.log('Mutation')
  console.log(clickedTrack)
  const useMutation = clickedTrack.isLiked
    ? useAddFavoriteMutation
    : useDeleteFavoriteMutation
  const user = JSON.parse(localStorage.getItem('userPleer'))
  const queryParam = clickedTrack.isLiked
    ? { id: clickedTrack.id, body: JSON.stringify(user) }
    : { id: clickedTrack.id }

  console.log(useMutation)
  const [changeFavorits, { isLoading, error }] = useMutation()
  console.log(`Mut ${changeFavorits} ${isLoading} ${error}`)
  const lox = async () => {
    await changeFavorits(queryParam).unwrap()
  }
  if (error) {
    if (error.status === 401) renewAccessToken()
    // } else dispatch(setErrorMessage(error.message))
  } else {
    console.log(isLoading)
  }
  return lox
  //   if (!isLoading && !error?.message) {
  //     asyncChangeFavorits()
  //   }

  //   useEffect(() => {
  //     playListItems = data?.map((song) => (
  //       <PlayListItem song={song} key={song.id} />
  //     ))
  //     dispatch(setIsLoading(false))
  //   }, [isLoading])
}
