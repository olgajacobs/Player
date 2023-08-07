const pleerSelector = (store) => store.pleer

export const playListSelector = (store) => pleerSelector(store)?.playlist || []

export const currentTrackSelector = (store) =>
  pleerSelector(store)?.currentTrack || {}

export const isPlayingSelector = (store) =>
  pleerSelector(store)?.isPlaying || false

export const isShuffledSelector = (store) =>
  pleerSelector(store)?.isShuffled || false

export const isAutoplaySelector = (store) =>
  pleerSelector(store)?.isAutoplay || false

export const todosSelector = () => {
  const c = {}
  //   const c = todoIdsSelector(store).map((id) => todoByIdSelector(store, id));
  //   console.log(c);
  return c
}
