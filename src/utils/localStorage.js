// Key constants
const USERS_KEY = 'users'
const CURRENT_USER_KEY = 'currentUser'

// Lấy danh sách người dùng
export const getUsers = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || []
}

// Lưu danh sách người dùng
export const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

// Lấy user đang đăng nhập
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY)) || null
}

// Lưu user đang đăng nhập
export const setCurrentUser = (user) => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))
}

// Xóa user đăng nhập
export const removeCurrentUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY)
}
