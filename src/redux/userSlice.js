import { createSlice } from '@reduxjs/toolkit'
import {
  getUsers,
  saveUsers,
  getCurrentUser,
  setCurrentUser,
  removeCurrentUser,
} from '../utils/localStorage'

const initialState = {
  users: getUsers(),
  currentUser: getCurrentUser(),
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
      saveUsers(state.users)
    },
    addUser: (state, action) => {
      state.users.push(action.payload)
      saveUsers(state.users)
    },
    login: (state, action) => {
      const username = action.payload.username.toLowerCase().trim()
      const password = action.payload.password.toLowerCase().trim()
      
      const foundUser = state.users.find(
        (u) =>
          u.username.toLowerCase() === username &&
          u.password.toLowerCase() === password
      )
      
      if (foundUser) {
        if (state.currentUser?.username !== foundUser.username) {
          state.currentUser = foundUser
          state.error = null
          setCurrentUser(foundUser)
        }
      } else {
        state.error = 'Sai tài khoản hoặc mật khẩu!'
      }
    },
    logout: (state) => {
      state.currentUser = null
      removeCurrentUser()
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const { setUsers, addUser, login, logout, clearError } = userSlice.actions
export default userSlice.reducer
