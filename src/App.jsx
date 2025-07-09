import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NewPost from './pages/NewPost'
import CommentPage from './pages/CommentPage'
import Search from './pages/Search'
function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((state) => Boolean(state.user.currentUser))
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

function App() {
  const isAuthenticated = useSelector((state) => Boolean(state.user.currentUser))

  return (
    <Router>
      {isAuthenticated && <Header />}
      {isAuthenticated && <Sidebar />}

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/new" element={<NewPost />} />
        <Route path="/post/:postId/comments" element={<CommentPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      

    </Router>
  )
}

export default App
