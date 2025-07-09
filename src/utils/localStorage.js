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

// Key lưu trạng thái yêu thích
const LIKES_KEY = 'likes'

// Lấy danh sách yêu thích từ localStorage
export const getLikes = () => {
  return JSON.parse(localStorage.getItem(LIKES_KEY)) || {}
}

// Lưu danh sách yêu thích
export const saveLikes = (likes) => {
  localStorage.setItem(LIKES_KEY, JSON.stringify(likes))
}

// Kiểm tra user đã thích post chưa
export const isPostLiked = (postId, userId) => {
  const likes = getLikes()
  return likes[postId]?.includes(userId) || false
}

// Thêm yêu thích
export const likePost = (postId, userId) => {
  const likes = getLikes()
  if (!likes[postId]) {
    likes[postId] = []
  }
  if (!likes[postId].includes(userId)) {
    likes[postId].push(userId)
    saveLikes(likes)
  }
}

// Bỏ yêu thích
export const unlikePost = (postId, userId) => {
  const likes = getLikes()
  if (likes[postId]) {
    likes[postId] = likes[postId].filter(id => id !== userId)
    saveLikes(likes)
  }
}

export const getLikesCount = (postId) => {
  const likes = getLikes()
  return likes[postId]?.length || 0
}

