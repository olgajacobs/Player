import {
  LOAD_PLAYLIST,
  SET_CURRENT_TRACK,
  SET_SHUFFLED_PLAYLIST,
  SET_ISPLAYING,
  SET_ISLOADING,
  NEXT_TRACK,
  PREV_TRACK,
  TOGGLE_SHUFFLED,
  TOGGLE_LOOP,
  TOGGLE_ISLIKED,
  SET_ERROR_MESSAGE,
  SET_CURRENT_PAGE,
  SET_ACTIVPLAYLIST,
} from '../types/pleer'

export const toggleShuffled = () => ({
  type: TOGGLE_SHUFFLED,
  payload: {},
})
export const toggleIsLiked = () => {
  console.log(`Креейтор сработал`)
  return {
    type: TOGGLE_ISLIKED,
    payload: {},
  }
}
export const toggleLoop = () => ({
  type: TOGGLE_LOOP,
  payload: {},
})
export const setIsPlaying = (newIsPlaying) => ({
  type: SET_ISPLAYING,
  payload: { newIsPlaying },
})
export const setIsLoading = (newIsLoading) => ({
  type: SET_ISLOADING,
  payload: { newIsLoading },
})
export const setCurrentPage = (newCurrentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: { newCurrentPage },
})
export const setErrorMessage = (newErrorMessage) => ({
  type: SET_ERROR_MESSAGE,
  payload: { newErrorMessage },
})

export const setActivePlayList = (newActivePlayList) => ({
  type: SET_ACTIVPLAYLIST,
  payload: { newActivePlayList },
})

export const nextTrack = () => ({
  type: NEXT_TRACK,
  payload: {},
})
export const prevTrack = () => ({
  type: PREV_TRACK,
  payload: {},
})
export const setCurrentTrack = (newCurrentTrack) => ({
  type: SET_CURRENT_TRACK,
  payload: { newCurrentTrack },
})
export const setShuffledPlaylist = () => ({
  type: SET_SHUFFLED_PLAYLIST,
  payload: {},
})
export const loadPlayList = (newPlaylist) => ({
  type: LOAD_PLAYLIST,
  payload: { newPlaylist },
})
