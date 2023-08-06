const pleerSelector = (store) => store.pleer

export const playListSelector = (store) => pleerSelector(store)?.playlist || []

export const currentTrackSelector = (store) => {
  const a = pleerSelector(store)?.currentTrack || {}
  console.log(a)
  return pleerSelector(store)?.currentTrack || {}
}
export const todosSelector = () => {
  const c = {}
  //   const c = todoIdsSelector(store).map((id) => todoByIdSelector(store, id));
  //   console.log(c);
  return c
}
