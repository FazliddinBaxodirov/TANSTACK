import { useState } from 'react'
import './App.css'
import Routers from './Routers'
import LoginRouters from './Routers/LoginRouters'

function App() {
  const [token,setToken] = useState(false)
  return(
    token ? <Routers/> : <LoginRouters setToken={setToken}/>
  )
}
export default App
