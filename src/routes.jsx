import { Routes, Route } from 'react-router-dom'

// import Cookies from 'js-cookie'
import Main from './pages/main'
import Registration from './pages/registration'
import Login from './pages/login'
import NotFound from './pages/notfound'
import PlayList from './pages/playlist'
import Favorites from './pages/favorites'
import ProtectedRoute from './Components/protected-route'

function AppRouts({ setUser, isLogined }) {
  console.log(`AppRouts: isLogined- ${isLogined}`)
  return (
    <Routes>
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/registration" element={<Registration />} />
      <Route element={<ProtectedRoute isLogined={isLogined} />}>
        {/* <Route element={<ProtectedRoute isLogined={Boolean(user)} />}> */}
        <Route path="/" element={<Main setUser={setUser} />} />
        <Route path="/playlist/:id" element={<PlayList />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
//   <ProtectedRoute isLogined={Boolean(Cookies.get('RegisteredUser'))}>
export default AppRouts
