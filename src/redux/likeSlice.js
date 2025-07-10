// redux/likeSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  likesByPostId: JSON.parse(localStorage.getItem('likes')) || {}
}

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const { postId, userId } = action.payload
      const currentLikes = state.likesByPostId[postId] || []

      if (currentLikes.includes(userId)) {
        state.likesByPostId[postId] = currentLikes.filter(id => id !== userId)
      } else {
        state.likesByPostId[postId] = [...currentLikes, userId]
      }

      localStorage.setItem('likes', JSON.stringify(state.likesByPostId))
    },
    loadLikes: (state) => {
      const stored = JSON.parse(localStorage.getItem('likes')) || {}
      state.likesByPostId = stored
    }
  },
})

export const { toggleLike, loadLikes } = likeSlice.actions
export default likeSlice.reducer
