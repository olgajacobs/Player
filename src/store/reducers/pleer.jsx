import { shuffle } from '../../util'
import {
  LOAD_PLAYLIST,
  SET_CURRENT_TRACK,
  SET_SHUFFLED_PLAYLIST,
  NEXT_TRACK,
  PREV_TRACK,
  TOGGLE_PLAYING,

  //   TOGGLE_SHUFFLED,
  TOGGLE_AUTOPLAY,
} from '../actions/types/pleer'

const initialState = {
  isLoading: true,
  isPlaying: false,
  isShuffled: false,
  isAutoplay: false,
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
      return { ...state, currentTrack: newCurrentTrack }
    }
    case SET_SHUFFLED_PLAYLIST: {
      const newShuffledPlaylist = shuffle(state.playlist)
      return { ...state, shuffledPlaylist: newShuffledPlaylist }
    }
    case NEXT_TRACK: {
      const { currentTrack, playlist } = state
      const currentIndex = playlist.findIndex((e) => e.id === currentTrack.id)
      if (currentIndex === playlist.length - 1) return { ...state }
      return { ...state, currentTrack: playlist[currentIndex + 1] }
    }
    case PREV_TRACK: {
      const { time } = action.payload
      const { currentTrack, playlist } = state
      const currentIndex = playlist.findIndex((e) => e.id === currentTrack.id)
      if (currentIndex === 0 || time > 5) return { ...state }
      return { ...state, currentTrack: playlist[currentIndex - 1] }
    }
    case TOGGLE_PLAYING: {
      return { ...state, isPlaying: !state.isPlaying }
    }
    case TOGGLE_AUTOPLAY: {
      return { ...state, isAutoplay: !state.isAutoplay }
    }
    // case SET_PAUSE: {
    //   return { ...state }
    // }
    // case TOGGLE_SHUFFLED: {
    //   return { ...state }
    // }
    // case TOGGLE_AUTOREPEAT: {
    //   return { ...state }
    // }

    default:
      return state
  }
}
