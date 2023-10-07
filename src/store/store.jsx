import { configureStore } from '@reduxjs/toolkit'
import pleerReducer from './slices/pleer'
import authReducer from './slices/auth'
import { RTKApi } from '../RTKapi'

const store = configureStore({
  reducer: {
    pleer: pleerReducer,
    auth: authReducer,
    [RTKApi.reducerPath]: RTKApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(RTKApi.middleware),
})

export default store
