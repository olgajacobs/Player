const pleerSelector = (store) => store.pleer

export const playListSelector = (store) => pleerSelector(store)?.playlist || []

export const currentTrackSelector = (store) =>
  pleerSelector(store)?.currentTrack || {}

export const currentPageSelector = (store) =>
  pleerSelector(store)?.currentPage || {}

export const isPlayingSelector = (store) =>
  pleerSelector(store)?.isPlaying || false

export const isLoadingSelector = (store) =>
  pleerSelector(store)?.isLoading || false

export const isShuffledSelector = (store) =>
  pleerSelector(store)?.isShuffled || false

export const showFooterSelector = (store) =>
  pleerSelector(store)?.showFooter || false

export const isLoopSelector = (store) => pleerSelector(store)?.isLoop || false
