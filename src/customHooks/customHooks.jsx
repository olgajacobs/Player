// import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useEffect, useState } from 'react'
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

  console.log(`Read 1`)
  const { data, isLoading, error } = useQuery()
  if (error) {
    if (error.status === 401) {
      console.log(`Read 2`)

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
export const useChangeLike = (isLiked) => {
  //   const dispatch = useDispatch()
  console.log(`isLiked ${isLiked}`)
  const setTokenRefreshed = useState(false)[1]
  const useMutation = isLiked
    ? useDeleteFavoriteMutation
    : useAddFavoriteMutation

  const [changeFavorits, { error }] = useMutation()
  //   console.log(`Mut ${isLoading} ${error}`)
  const lox = async (clickedTrack) => {
    const user = JSON.parse(localStorage.getItem('userPleer'))
    const queryParam = clickedTrack.isLiked
      ? { id: clickedTrack.id, body: JSON.stringify(user) }
      : { id: clickedTrack.id }
    console.log(queryParam)
    await changeFavorits(queryParam).unwrap()
  }

  useEffect(() => {
    if (error) {
      console.log(`Mut 1`)
      if (error.status === 401) renewAccessToken()
      console.log(`Mut 2`)
      setTokenRefreshed(true)
      console.log(`Mut 3`)
    }
  }, [error])
  return lox
}
