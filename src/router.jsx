import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Explore from './pages/Explore'
import Login from './pages/Login'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/profile', element: <Profile /> },
  { path: '/explore', element: <Explore /> },
  { path: '/login', element: <Login /> },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
