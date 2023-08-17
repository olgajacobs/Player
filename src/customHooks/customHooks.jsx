// import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useState } from 'react'
// import { useEffect, useState } from 'react'
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
  const [r, setRereadTracks] = useState(false)

  const a = async () => {
    await renewAccessToken()
    setRereadTracks(true)
    console.log(r)
  }

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
      a()
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
  //   const setTokenRefreshed = useState(false)[1]
  const useMutation = isLiked
    ? useDeleteFavoriteMutation
    : useAddFavoriteMutation

  const [changeLikes, { error, isLoading }] = useMutation()

  const lox = async (clickedTrack) => {
    const user = JSON.parse(localStorage.getItem('userPleer'))
    const queryParam = clickedTrack.isLiked
      ? { id: clickedTrack.id, body: JSON.stringify(user) }
      : { id: clickedTrack.id }

    await changeLikes(queryParam).unwrap()
    if (error) {
      if (error.status === 401 && !isLoading) await renewAccessToken()

      await changeLikes(queryParam).unwrap()
    }
  }

  return lox
}
