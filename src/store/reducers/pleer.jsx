import { FAVORITES, PLAYLIST } from '../../const'
import { shuffle } from '../../util'
import {
  LOAD_PLAYLIST,
  SET_CURRENT_PAGE,
  SET_ERROR_MESSAGE,
  SET_CURRENT_TRACK,
  SET_SHUFFLED_PLAYLIST,
  NEXT_TRACK,
  PREV_TRACK,
  SET_ISPLAYING,
  SET_ISLOADING,
  SET_ACTIVPLAYLIST,
  TOGGLE_SHUFFLED,
  TOGGLE_LOOP,
  TOGGLE_ISLIKED,
} from '../actions/types/pleer'

const initialState = {
  isLoading: true,
  isPlaying: false,
  isShuffled: false,
  isLoop: false,
  showFooter: false,
  activPlayList: PLAYLIST,
  errorMessage: '',
  currentPage: '',
  currentTrack: {},
  playlist: [],
  favorites: [],
  shuffledPlaylist: [],
}

export default function pleerReducer(state = initialState, action = '') {
  console.log(action.type)
  switch (action.type) {
    case LOAD_PLAYLIST: {
      const { newPlaylist } = action.payload
      if (state.currentPage === PLAYLIST)
        return { ...state, playlist: newPlaylist }
      return { ...state, favorites: newPlaylist }
    }
    case SET_CURRENT_TRACK: {
      const { newCurrentTrack } = action.payload
      if (state.showFooter)
        return {
          ...state,
          currentTrack: newCurrentTrack,
          activPlayList: state.currentPage,
        }
      return {
        ...state,
        currentTrack: newCurrentTrack,
        showFooter: true,
        activPlayList: state.currentPage,
      }
    }
    case SET_SHUFFLED_PLAYLIST: {
      const newShuffledPlaylist = shuffle(state.playlist)
      return { ...state, shuffledPlaylist: newShuffledPlaylist }
    }
    case NEXT_TRACK: {
      const {
        currentTrack,
        playlist,
        favorites,
        shuffledPlaylist,
        activPlayList,
      } = state

      let pl = playlist
      if (state.isShuffled) {
        pl = shuffledPlaylist
      } else if (activPlayList === FAVORITES) {
        pl = favorites
      }
      const currentIndex = pl.findIndex((e) => e.id === currentTrack.id)
      if (currentIndex === pl.length - 1)
        return state.isShuffled
          ? { ...state, currentTrack: pl[0] }
          : { ...state, isPlaying: false }
      return { ...state, currentTrack: pl[currentIndex + 1] }
    }
    case PREV_TRACK: {
      const {
        currentTrack,
        playlist,
        favorites,
        shuffledPlaylist,
        activPlayList,
      } = state
      let pl = playlist
      if (state.isShuffled) {
        pl = shuffledPlaylist
      } else if (activPlayList === FAVORITES) {
        pl = favorites
      }
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
    case SET_ACTIVPLAYLIST: {
      const { newActivePlayList } = action.payload
      return { ...state, activePlayList: newActivePlayList }
    }
    case SET_CURRENT_PAGE: {
      const { newCurrentPage } = action.payload
      return { ...state, currentPage: newCurrentPage }
    }
    case SET_ERROR_MESSAGE: {
      const { newErrorMessage } = action.payload
      return { ...state, errorMessage: newErrorMessage }
    }
    case TOGGLE_LOOP: {
      return { ...state, isLoop: !state.isLoop }
    }
    case TOGGLE_ISLIKED: {
      console.log(`New сurrent flagdddd`)
      const ct = { ...state.currentTrack }
      const newCt = { ...ct, isLiked: !ct.isLiked }
      console.log(`New сurrent flag ${newCt.isLiked}`)
      return { ...state, currentTrack: newCt }
    }

    case TOGGLE_SHUFFLED: {
      return { ...state, isShuffled: !state.isShuffled }
    }

    default:
      return state
  }
}
