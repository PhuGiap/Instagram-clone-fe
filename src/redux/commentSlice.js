// redux/commentSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  commentsByPostId: JSON.parse(localStorage.getItem('comments') || '{}'),
}

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { postId, comment } = action.payload
      if (!state.commentsByPostId[postId]) {
        state.commentsByPostId[postId] = []
      }
      state.commentsByPostId[postId].push(comment)
      localStorage.setItem('comments', JSON.stringify(state.commentsByPostId))
    },
    loadComments: (state, action) => {
      const { postId } = action.payload
      const saved = JSON.parse(localStorage.getItem('comments') || '{}')
      state.commentsByPostId[postId] = saved[postId] || []
    },
  },
})

export const { addComment, loadComments } = commentSlice.actions
export default commentSlice.reducer
