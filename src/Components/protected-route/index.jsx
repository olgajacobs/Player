import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ redirectPath = '/login', isLogined }) {
  //   const cookies = Cookies.get('token')
  //   console.log(`Prot: cookies- ${cookies} isLogined- ${isLogined}`)

  if (!isLogined) {
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />
}

export default ProtectedRoute
