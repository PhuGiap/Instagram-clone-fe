import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((state) => state.user.currentUser)
  const posts = useSelector((state) => state.post.posts)

  if (!user) {
    return <p className="text-center mt-10">Không có thông tin người dùng.</p>
  }

  // Lọc các bài viết của user hiện tại
  const userPosts = posts.filter((post) => post.username === user.username)

  return (
    <div className="max-w-md mx-auto p-4 text-sm font-sans">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar || '/images/default-avatar.png'}
          alt="avatar"
          className="w-20 h-20 rounded-full border"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{user.username}</h2>
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-center">
              <p className="font-semibold">{userPosts.length}</p>
              <p className="text-gray-600">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">{user.followers || 0}</p>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">{user.following || 0}</p>
              <p className="text-gray-600">Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-4">
        <p className="font-medium">{user.name || 'Tên chưa cập nhật'}</p>
        <p className="text-sm">{user.bio || 'Chưa có tiểu sử'}</p>
        {user.link && (
          <a href={user.link} className="text-blue-500">@{user.linkLabel || user.link}</a>
        )}
        <button className="w-full px-4 mt-4 py-1 border rounded text-sm">Edit Profile</button>
      </div>

      {/* Story Highlights */}
      {user.highlights?.length > 0 && (
        <div className="flex gap-3 mt-4 overflow-x-auto">
          {user.highlights.map((h, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={h.image}
                alt={h.label}
                className="w-14 h-14 rounded-full border"
              />
              <p className="text-xs mt-1">{h.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tabs */}
      <div className="flex justify-around border-t mt-4 pt-2 text-gray-600 text-sm">
        <button className="font-semibold text-black">Grid</button>
        <button>Reels</button>
        <button>Tagged</button>
      </div>

      {/* Gallery */}
      {userPosts.length > 0 ? (
        <div className="grid grid-cols-3 gap-1 mt-2">
          {userPosts.map((post, idx) => (
            <img
              key={idx}
              src={post.image}
              alt={`post-${idx}`}
              className="w-full aspect-square object-cover"
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">Chưa có bài viết nào.</p>
      )}
    </div>
  )
}

export default Profile
