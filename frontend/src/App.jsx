import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './components/Admin'
import User from './components/User'
import AdminLogin from './components/AdminLogin'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/adminLogin' element={<AdminLogin />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
