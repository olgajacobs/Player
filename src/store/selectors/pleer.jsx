const pleerSelector = (store) => store.pleer

export const playListSelector = (store) => pleerSelector(store)?.playlist || []

export const currentTrackSelector = (store) =>
  pleerSelector(store)?.currentTrack || {}

export const todosSelector = () => {
  const c = {}
  //   const c = todoIdsSelector(store).map((id) => todoByIdSelector(store, id));
  //   console.log(c);
  return c
}
