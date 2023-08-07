import {
  LOAD_PLAYLIST,
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  SET_PAUSE,
  TOGGLE_SHUFFLED,
  TOGGLE_AUTOREPEAT,
} from '../types/pleer'

export const toggleShuffled = () => ({
  type: TOGGLE_SHUFFLED,
  payload: {},
})
export const toggleAutorepeat = () => ({
  type: TOGGLE_AUTOREPEAT,
  payload: {},
})
export const setPause = () => ({
  type: SET_PAUSE,
  payload: {},
})
export const nextTrack = () => ({
  type: NEXT_TRACK,
  payload: {},
})
export const prevTrack = (time) => ({
  type: PREV_TRACK,
  payload: { time },
})
export const setCurrentTrack = (newCurrentTrack) => ({
  type: SET_CURRENT_TRACK,
  payload: { newCurrentTrack },
})
export const loadPlayList = (newPlaylist) => ({
  type: LOAD_PLAYLIST,
  payload: { newPlaylist },
})
