import React from 'react'

const Sidebar = () => {
  return (
    <aside className="w-20 md:w-64 min-h-screen px-2 md:px-4 py-6 border-r border-gray-200 flex flex-col justify-between">
      <div className="flex flex-col space-y-6">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start px-2">
          <h2 className="text-2xl font-bold font-pacifico hidden md:block">Instagram</h2>
          <h2 className="text-2xl font-bold font-pacifico md:hidden">📸</h2>
        </div>

        {/* Menu */}
        <nav className="flex flex-col space-y-2 text-sm font-medium text-gray-800">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center space-x-3 px-2 py-2 hover:bg-gray-100 rounded"
            >
              <div className="text-xl">{item.icon}</div>
              <div className="hidden md:block">{item.label}</div>
            </div>
          ))}

          {/* Avatar */}
          <div className="flex items-center space-x-3 px-2 py-2 hover:bg-gray-100 rounded">
            <img
              src="/your-avatar.jpg"
              alt="Avatar"
              className="w-6 h-6 rounded-full object-cover"
            />
            <div className="hidden md:block">Profile</div>
          </div>
        </nav>
      </div>

      {/* Menu dưới: Xem thêm */}
      <div className="pt-6">
        <div className="flex items-center space-x-3 px-2 py-2 hover:bg-gray-100 rounded">
          <div className="text-xl">☰</div>
          <div className="hidden md:block">Xem thêm</div>
        </div>
      </div>
    </aside>
  )
}

// Menu items tách riêng để dễ quản lý
const menuItems = [
  { icon: '🏠', label: 'Home' },
  { icon: '🔍', label: 'Search' },
  { icon: '🧭', label: 'Explore' },
  { icon: '🎞️', label: 'Reels' },
  { icon: '💬', label: 'Messages' },
  { icon: '❤️', label: 'Notifications' },
  { icon: '➕', label: 'New' },
]

export default Sidebar
