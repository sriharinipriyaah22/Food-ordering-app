import { useState } from 'react'
import './App.css'
import Navbar from './Shared/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import REgister from './pages/REgister'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<REgister />}/>
      

    </Routes>
    <Footer />
  
       </>
  )
}

export default App
