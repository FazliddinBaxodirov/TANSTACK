import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'

function LoginRouters({setToken}) {
  return (
    <Routes>
        <Route path='/' element={<Login setToken={setToken}/>}/>
    </Routes>
  )
}

export default LoginRouters
