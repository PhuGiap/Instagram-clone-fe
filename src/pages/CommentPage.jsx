import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUsers } from '../utils/localStorage'

const CommentPage = () => {
  const { postId } = useParams()
  const reduxPosts = useSelector((state) => state.post.posts)
  const currentUser = useSelector((state) => state.user.currentUser)
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [input, setInput] = useState('')
  const [samplePosts, setSamplePosts] = useState([])
  const [expandedComments, setExpandedComments] = useState({})

  useEffect(() => {
    fetch('/posts.json')
      .then((res) => res.json())
      .then((data) => setSamplePosts(data))
      .catch((err) => console.error('Failed to load sample posts:', err))
  }, [])

  useEffect(() => {
    const allPosts = [...reduxPosts, ...samplePosts]
    const found = allPosts.find((p) => p.id === postId)
    setPost(found)

    const saved = JSON.parse(localStorage.getItem('comments') || '{}')
    setComments(saved[postId] || [])
  }, [postId, reduxPosts, samplePosts])

 const handleAddComment = () => {
  if (!currentUser) {
    alert('You must be logged in to comment.')
    return
  }

  if (!input.trim()) return

  const now = new Date()
  const formattedTime = `${now.toLocaleDateString('vi-VN')} ${now.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
  })}`

  const newComment = {
    id: Date.now(),
    userId: currentUser.id,
    username: currentUser.username,
    avatar: currentUser.avatar,
    text: input.trim(),
    time: formattedTime,
  }

  const updated = [...comments, newComment]
  setComments(updated)

  const all = JSON.parse(localStorage.getItem('comments') || '{}')
  all[postId] = updated
  localStorage.setItem('comments', JSON.stringify(all))

  setInput('')
}


  const toggleExpand = (id) => {
    setExpandedComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  if (!post) return <div className="text-center py-10">Đang tải bài viết...</div>

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl md:h-[90vh] mx-auto my-6 rounded-lg overflow-hidden shadow-lg bg-white pb-[60px]">
      {/* Hình ảnh bài viết */}
      <div className="md:w-1/2 w-full bg-black flex items-center justify-center">
        <img
          src={post.image}
          alt="post"
          className="w-full h-full object-contain md:object-cover"
        />
      </div>

      {/* Phần bình luận */}
      <div className="md:w-1/2 w-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b">
          <img src={post.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
          <span className="font-semibold text-sm">@{post.username}</span>
        </div>

        {/* Danh sách bình luận */}
        {comments.length > 0 && (
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 text-sm">
            {comments.map((cmt) => {
              const isExpanded = expandedComments[cmt.id]
              const words = cmt.text.trim().split(' ')
              const isLong = words.length > 20
              const shortText = words.slice(0, 20).join(' ') + '...'

              return (
                <div key={cmt.id} className="flex items-start gap-3">
                  <img src={cmt.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                  <div className="flex-1">
                    <p className="break-words">
                      <span className="font-semibold">@{cmt.username}</span>{' '}
                      {isExpanded || !isLong ? cmt.text : shortText}
                      {isLong && (
                        <button
                          onClick={() => toggleExpand(cmt.id)}
                          className="ml-1 text-blue-500 hover:underline text-xs"
                        >
                          {isExpanded ? 'Ẩn bớt' : 'Xem thêm'}
                        </button>
                      )}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{cmt.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Input bình luận */}
        <div className="border-t px-3 py-3">
          <div className="relative">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Bình luận..."
              className="w-full px-4 pr-16 py-2 text-sm border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <button
              onClick={handleAddComment}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 font-semibold disabled:opacity-40 text-sm"
              disabled={!input.trim()}
            >
              Đăng
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentPage
