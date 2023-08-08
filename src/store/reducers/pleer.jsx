import { shuffle } from '../../util'
import {
  LOAD_PLAYLIST,
  SET_CURRENT_TRACK,
  SET_SHUFFLED_PLAYLIST,
  NEXT_TRACK,
  PREV_TRACK,
  SET_ISPLAYING,

  //   TOGGLE_SHUFFLED,
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
    case SET_ISPLAYING: {
      const { newIsPlaying } = action.payload
      console.log('IsPlaying')
      console.log(newIsPlaying)
      console.log(state.isPlaying)
      return { ...state, isPlaying: newIsPlaying }
    }
    case TOGGLE_LOOP: {
      return { ...state, isLoop: !state.isLoop }
    }

    // case TOGGLE_SHUFFLED: {
    //   return { ...state }
    // }

    default:
      return state
  }
}
