import { configureStore } from '@reduxjs/toolkit'
import pleerReducer from './reducers/pleer'
import { RTKApi } from '../RTKapi'
// import { RTKApi } from '../RTKApi.js';

 const store = configureStore({
  reducer: {
    pleer: pleerReducer,
    [RTKApi.reducerPath]: RTKApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(RTKApi.middleware)
})


export default store
