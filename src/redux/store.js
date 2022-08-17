
import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from './reducers';

const store = configureStore({
    reducer:{
        peopleReducer : peopleReducer
    }
})

export default store;

