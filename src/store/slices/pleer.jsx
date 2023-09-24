import { createSlice } from '@reduxjs/toolkit'
import { FAVORITES, PLAYLIST } from '../../const'
import { shuffle } from '../../util'

const initialState = {
  isLoading: true,
  isPlaying: false,
  isShuffled: false,
  isLoop: false,
  showFooter: false,
  activPlayList: PLAYLIST,
  errorMessage: '',
  currentPage: PLAYLIST,
  currentTrack: {},
  playlist: [],
  favorites: [],
  shuffledPlaylist: [],
}

const pleerSlice = createSlice({
  name: 'pleer',
  initialState,
  reducers: {
    loadPlayList(state, action) {
      const { playList, currentPage } = action.payload
      if (currentPage === PLAYLIST) {
        state.playlist = playList
      } else {
        state.favorites = playList
      }
      state.currentPage = currentPage
      state.shuffledPlaylist = shuffle(state.playlist)
    },

    nextTrack(state) {
      let pl = state.playlist
      if (state.isShuffled) {
        pl = state.shuffledPlaylist
      } else if (state.activPlayList === FAVORITES) {
        pl = state.favorites
      }
      const currentIndex = pl.findIndex((e) => e.id === state.currentTrack.id)
      if (currentIndex === pl.length - 1) {
        if (state.isShuffled) {
          ;[state.currentTrack] = pl
        } else {
          state.isPlaying = false
        }
      } else {
        state.currentTrack = pl[currentIndex + 1]
      }
    },

    prevTrack(state) {
      let pl = state.playlist
      if (state.isShuffled) {
        pl = state.shuffledPlaylist
      } else if (state.activPlayList === FAVORITES) {
        pl = state.favorites
      }
      const currentIndex = pl.findIndex((e) => e.id === state.currentTrack.id)
      if (currentIndex === 0) {
        if (state.isShuffled) {
          state.currentTrack = pl[pl.length - 1]
        }
      } else {
        state.currentTrack = pl[currentIndex - 1]
      }
    },
    setCurrentTrack(state, action) {
      state.currentTrack = action.payload.currentTrack
      state.activPlayList = state.currentPage
      if (!state.showFooter) state.showFooter = true
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload.isLoading
    },
    setIsPlaying(state, action) {
      console.log(`isPlaying changed ${action.payload.isPlaying}`)
      state.isPlaying = action.payload.isPlaying
    },
    setActivePlayList(state, action) {
      state.activePlayList = action.payload.activePlayList
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload.currentPage
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload.errorMessage
    },

    toggleShuffled(state) {
      state.isShuffled = !state.isShuffled
    },
    toggleLoop(state) {
      state.isLoop = !state.isLoop
    },
    toggleIsLiked(state) {
      state.currentTrack.isLiked = !state.currentTrack.isLiked
    },
  },
})

export const {
  loadPlayList,
  setCurrentTrack,
  nextTrack,
  prevTrack,
  setIsLoading,
  setIsPlaying,
  setActivePlayList,
  setCurrentPage,
  setErrorMessage,
  toggleLoop,
  toggleShuffled,
  toggleIsLiked,
} = pleerSlice.actions
export default pleerSlice.reducer
