import { configureStore } from '@reduxjs/toolkit'
import pleerReducer from './slices/pleer'
import { RTKApi } from '../RTKapi'

const store = configureStore({
  reducer: {
    pleer: pleerReducer,
    [RTKApi.reducerPath]: RTKApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(RTKApi.middleware),
})

export default store
