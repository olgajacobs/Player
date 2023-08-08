import {
  LOAD_PLAYLIST,
  SET_CURRENT_TRACK,
  SET_SHUFFLED_PLAYLIST,
  NEXT_TRACK,
  PREV_TRACK,
  SET_PAUSE,
  TOGGLE_PLAYING,
  TOGGLE_SHUFFLED,
  TOGGLE_AUTOPLAY,
} from '../types/pleer'

export const toggleShuffled = () => ({
  type: TOGGLE_SHUFFLED,
  payload: {},
})
export const toggleAutoplay = () => ({
  type: TOGGLE_AUTOPLAY,
  payload: {},
})
export const togglePlaying = () => ({
  type: TOGGLE_PLAYING,
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
export const setShuffledPlaylist = () => ({
  type: SET_SHUFFLED_PLAYLIST,
  payload: {},
})
export const loadPlayList = (newPlaylist) => ({
  type: LOAD_PLAYLIST,
  payload: { newPlaylist },
})
