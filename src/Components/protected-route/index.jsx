import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children, redirectPath = '/login', isLogined }) {
  if (!isLogined) {
    return <Navigate to={redirectPath} replace />
  }
  return children
}

export default ProtectedRoute
