import {
  LOAD_PLAYLIST,
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  //   SET_PAUSE,
  //   TOGGLE_SHUFFLED,
  //   TOGGLE_AUTOREPEAT,
} from '../actions/types/pleer'

const initialState = {
  loading: true,
  playing: false,
  shuffled: false,
  autorepeat: false,
  currentTrack: [],
  playlist: [],
  shuffledPlayList: [],
}

export default function pleerReducer(state = initialState, action = '') {
  switch (action.type) {
    case LOAD_PLAYLIST: {
      const { newPlaylist } = action.payload
      return {
        ...state,
        playlist: newPlaylist,
      }
    }

    case SET_CURRENT_TRACK: {
      const { newCurrentTrack } = action.payload
      return {
        ...state,
        currentTrack: newCurrentTrack,
      }
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
