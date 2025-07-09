import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPosts } from '../redux/postSlice'
import { Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {
  likePost,
  unlikePost,
  getUsers,
  getLikesCount
} from '../utils/localStorage'

const Feed = () => {
  const dispatch = useDispatch()
  const reduxPosts = useSelector((state) => state.post.posts)
  const currentUser = useSelector((state) => state.user.currentUser)
  const navigate = useNavigate()

  const [samplePosts, setSamplePosts] = useState([])
  const [likedPosts, setLikedPosts] = useState({})
  const [expandedCaptions, setExpandedCaptions] = useState({})

  const toggleCaption = (postId) => {
  setExpandedCaptions((prev) => ({
    ...prev,
    [postId]: !prev[postId],
  }))
}
  // Chỉ load bài mẫu từ posts.json 1 lần duy nhất
  useEffect(() => {
  fetch('/posts.json')
    .then((res) => res.json())
    .then((data) => setSamplePosts(data))
    .catch((err) => console.error('Failed to load sample posts:', err))
}, [])  

  // Like posts
  useEffect(() => {
    if (currentUser) {
      const likes = JSON.parse(localStorage.getItem('likes')) || {}
      const liked = {}
      for (const [postId, userIds] of Object.entries(likes)) {
        if (userIds.includes(currentUser.id)) {
          liked[postId] = true
        }
      }
      setLikedPosts(liked)
    }
  }, [reduxPosts, currentUser])

  const handleToggleLike = (postId) => {
    if (!currentUser?.id) return
    const isLiked = likedPosts[postId]

    if (isLiked) {
      unlikePost(postId, currentUser.id)
    } else {
      likePost(postId, currentUser.id)
    }

    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !isLiked
    }))
  }


  const users = getUsers()

const allPosts = [...reduxPosts, ...samplePosts].map((post) => {
  const user = users.find(
    (u) => u.username === post.userId || u.username === post.username
  )
  return {
    ...post,
    avatar: user?.avatar || 'https://i.pravatar.cc/150?u=' + (post.userId || post.username),
    username: post.userId || post.username
  }
})


  return (
    <div className="max-w-md mx-auto p-4 pb-[60px]
">
      {allPosts.length === 0 ? (
        <p className="text-center text-gray-500">Chưa có bài viết nào.</p>
      ) : (
        allPosts.map((post) => (
          <div
            key={post.id + '-' + post.username}
            className="mb-6 border rounded-lg overflow-hidden shadow-sm bg-white"
          >
            <div className="flex items-center gap-2 px-4 py-2">
              <img
                src={post.avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-semibold text-sm">@{post.username}</span>
            </div>

            <img src={post.image} alt="post" className="w-full object-cover" />

            <div className="px-4 py-2">
              <div className='flex items-center gap-4 mb-2'>
                <button onClick={() => handleToggleLike(post.id)}>
  {likedPosts[post.id] ? (
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="red"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="transition duration-200 hover:scale-110"
    >
      <path d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
               2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
               4.5 2.09C13.09 3.81 14.76 3 16.5 3 
               19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
               11.54l-1.35 1.31z" />
    </svg>
  ) : (
 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="text-gray-700 transition duration-200 hover:scale-110"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
               2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
               4.5 2.09C13.09 3.81 14.76 3 16.5 3 
               19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
               11.54L12 21.35z" />
    </svg>
  )}
</button>
              <button onClick={() => navigate(`/post/${post.id}/comments`)}>
                <svg
      aria-label="Bình luận"
      fill="currentColor"
      height="22"
      role="img"
      viewBox="0 0 24 24"
      width="22"
      className="text-gray-600 hover:text-black transition duration-200"
    >
      <title>Bình luận</title>
      <path
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
                </svg>
              </button>
              </div>

              <p className="text-xs text-gray-500 mt-1">
                {getLikesCount(post.id)} likes
              </p>

              <p className="text-sm mt-1">
  <span className="font-semibold">@{post.username}</span>{' '}
  {expandedCaptions[post.id] || post.caption.length <= 100
    ? post.caption
    : `${post.caption.slice(0, 100)}...`}

  {post.caption.length > 100 && (
    <button
    style={{ color: 'rgb(115, 115, 115)' }}
      onClick={() => toggleCaption(post.id)}
      className="ml-1 text-blue-500 text-xs underline"
    >
      {expandedCaptions[post.id] ? 'Thu gọn' : 'Xem thêm'}
    </button>
  )}
</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Feed
