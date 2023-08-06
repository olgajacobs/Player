import { configureStore } from '@reduxjs/toolkit'
import pleerReducer from './reducers/pleer'

const store = configureStore({
  reducer: {
    pleer: pleerReducer,
  },
})

export default store
