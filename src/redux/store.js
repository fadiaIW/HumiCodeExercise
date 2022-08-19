
import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from './reducers';

const store = configureStore({
    reducer:{
        peopleReducer : peopleReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})

export default store;

