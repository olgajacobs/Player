import { Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
// import Cookies from 'js-cookie'
import Main from './pages/main'
import Registration from './pages/registration'
import Login from './pages/login'
import NotFound from './pages/notfound'
import PlayList from './pages/playlist'
import Favorites from './pages/favorites'
import ProtectedRoute from './Components/protected-route'

function AppRouts({ setUser, user }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          //   <ProtectedRoute isLogined={Boolean(Cookies.get('RegisteredUser'))}>
          <ProtectedRoute isLogined={Boolean(user)}>
            <Main />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login setUser={setUser} />} />

      <Route path="/registration" element={<Registration />} />
      <Route path="/playlist/:id" element={<PlayList />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouts
