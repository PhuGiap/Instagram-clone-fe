// src/redux/postSlice.js
import { createSlice } from '@reduxjs/toolkit'

// Load post người dùng từ localStorage (không gồm sample)
const loadPosts = () => {
  try {
    const data = localStorage.getItem('posts')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.error('Failed to load posts from localStorage:', err)
    return []
  }
}

const initialState = {
  posts: loadPosts()
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    toggleLike: (state, action) => {
      const post = state.posts.find(p => p.id === action.payload)
      if (post) {
        post.liked = !post.liked
      }
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload)
      try {
        localStorage.setItem('posts', JSON.stringify(state.posts))
      } catch (err) {
        console.warn('Không thể lưu post vào localStorage. Có thể do vượt giới hạn:', err)
      }
    }
  }
})

export const { setPosts, toggleLike, addPost } = postSlice.actions
export default postSlice.reducer
