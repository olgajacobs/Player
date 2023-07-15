import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ redirectPath = '/login', isLogined }) {
  if (!isLogined) {
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />
}

export default ProtectedRoute
