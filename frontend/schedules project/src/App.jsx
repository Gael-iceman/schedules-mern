import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar></Navbar>
      <div className="pages">
      <Routes>
        <Route 
        path='/'
        element={<Home/>}
        />
       </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App