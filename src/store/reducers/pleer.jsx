import { shuffle } from '../../util'
import {
  LOAD_PLAYLIST,
  SET_CURRENT_TRACK,
  SET_SHUFFLED_PLAYLIST,
  NEXT_TRACK,
  PREV_TRACK,
  SET_ISPLAYING,
  SET_ISLOADING,
  TOGGLE_SHUFFLED,
  TOGGLE_LOOP,
} from '../actions/types/pleer'

const initialState = {
  isLoading: true,
  isPlaying: false,
  isShuffled: false,
  isLoop: false,
  showFooter: false,
  currentTrack: {},
  playlist: [],
  shuffledPlaylist: [],
}

export default function pleerReducer(state = initialState, action = '') {
  switch (action.type) {
    case LOAD_PLAYLIST: {
      const { newPlaylist } = action.payload
      return { ...state, playlist: newPlaylist }
    }
    case SET_CURRENT_TRACK: {
      const { newCurrentTrack } = action.payload
      if (state.showFooter) return { ...state, currentTrack: newCurrentTrack }
      return { ...state, currentTrack: newCurrentTrack, showFooter: true }
    }
    case SET_SHUFFLED_PLAYLIST: {
      const newShuffledPlaylist = shuffle(state.playlist)
      return { ...state, shuffledPlaylist: newShuffledPlaylist }
    }
    case NEXT_TRACK: {
      const { currentTrack, playlist, shuffledPlaylist } = state
      const pl = state.isShuffled ? shuffledPlaylist : playlist
      const currentIndex = pl.findIndex((e) => e.id === currentTrack.id)
      if (currentIndex === pl.length - 1)
        return state.isShuffled
          ? { ...state, currentTrack: pl[0] }
          : { ...state, isPlaying: false }
      return { ...state, currentTrack: pl[currentIndex + 1] }
    }
    case PREV_TRACK: {
      const { currentTrack, playlist, shuffledPlaylist } = state
      const pl = state.isShuffled ? shuffledPlaylist : playlist
      const currentIndex = pl.findIndex((e) => e.id === currentTrack.id)
      if (currentIndex === 0)
        return state.isShuffled
          ? { ...state, currentTrack: pl[pl.length - 1] }
          : { ...state }
      return { ...state, currentTrack: pl[currentIndex - 1] }
    }
    case SET_ISPLAYING: {
      const { newIsPlaying } = action.payload

      return { ...state, isPlaying: newIsPlaying }
    }
    case SET_ISLOADING: {
      const { newIsLoading } = action.payload

      return { ...state, isLoading: newIsLoading }
    }
    case TOGGLE_LOOP: {
      return { ...state, isLoop: !state.isLoop }
    }

    case TOGGLE_SHUFFLED: {
      return { ...state, isShuffled: !state.isShuffled }
    }

    default:
      return state
  }
}
