// src/pages/SearchUser.jsx
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SearchUser = () => {
  const allUsers = useSelector((state) => state.user.users)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const trimmedQuery = query.trim()

  const filteredUsers = allUsers.filter(user =>
    user.username.toLowerCase().includes(trimmedQuery.toLowerCase())
  )

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Tìm kiếm người dùng..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      {trimmedQuery && filteredUsers.length === 0 && (
        <p className="text-center text-gray-500">Không tìm thấy người dùng.</p>
      )}

      <ul className="space-y-2">
        {filteredUsers.map(user => (
          <li
            key={user.id}
            className="flex items-center gap-3 p-2 border rounded cursor-pointer hover:bg-gray-100"
            onClick={() => navigate(`/profile/${user.username}`)}
          >
            <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
            <span>@{user.username}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchUser
