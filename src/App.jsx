import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NewPost from './pages/NewPost'
import CommentPage from './pages/CommentPage'
import Search from './pages/Search'

// Layout cho các route cần login
function PrivateLayout() {
  const isAuthenticated = useSelector((state) => Boolean(state.user.currentUser))
  if (!isAuthenticated) return <Navigate to="/login" replace />

  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  )
}

function App() {
  const isAuthenticated = useSelector((state) => Boolean(state.user.currentUser))

  return (
    <Router>
      <Routes>
        {/* Trang chính: redirect về /home hoặc /login */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
          }
        />

        {/* Login không cần bảo vệ */}
        <Route path="/login" element={<Login />} />

        {/* Các route cần đăng nhập */}
        <Route element={<PrivateLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post/:postId/comments" element={<CommentPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
