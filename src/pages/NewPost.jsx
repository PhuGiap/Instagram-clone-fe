// src/pages/NewPost.jsx
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPost } from '../redux/postSlice' 

const NewPost = () => {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector(state => state.user.currentUser)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!image || !caption) return

    const newPost = {
  id: Date.now().toString(),
  username: currentUser?.username || 'unknown', 
  avatar: currentUser?.avatar || '',            
  image,
  caption,
  likedBy: []
}

    dispatch(addPost(newPost))
    navigate('/home')
  }

  return (
    <div className="max-w-md mx-auto p-4 pb-[60px] ">
      <h2 className="text-xl font-bold text-center mb-4">Tạo bài viết mới</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border rounded p-2"
        />
        {image && (
          <img
            src={image}
            alt="Preview"
            className="w-full h-auto rounded object-cover"
          />
        )}
        <textarea
          placeholder="Viết chú thích..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="border rounded p-2 h-24 resize-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          disabled={!image || !caption}
        >
          Share
        </button>
      </form>
    </div>
  )
}

export default NewPost
