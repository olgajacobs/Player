import { Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import Registration from './pages/registration'
import Login from './pages/login'

import NotFound from './pages/notfound'
import PlayList from './pages/playlist'
import Favorites from './pages/favorites'
import ProtectedRoute from './Components/protected-route'
// import { readUserFromContext } from './contexts/context'

function AppRouts({ isLogined }) {
  //   console.log(`AppRouts: isLogined- ${isLogined} user- ${user}`)
  //   const { user } = readUserFromContext()
  console.log(`AppRouts:  isLogined- ${isLogined}`)
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      {/* <Route element={<ProtectedRoute />}> */}
      <Route element={<ProtectedRoute isLogined={isLogined} />}>
        <Route path="/" element={<Main />} />
        <Route path="/playlist/:id" element={<PlayList />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouts
