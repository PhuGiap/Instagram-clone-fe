// ./redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import postReducer from './postSlice'
import commentReducer from './commentSlice'
import likeReducer from './likeSlice' //
const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    like: likeReducer,
  },
})

export default store
