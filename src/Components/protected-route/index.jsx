import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ redirectPath = '/login', isLogined }) {
  console.log(`Protect:  isLogined- ${isLogined}`)
  if (!isLogined) {
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />
}

export default ProtectedRoute
