import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import NotFoundPage from './components/NotFoundPage'

function App() {
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='about' element={ <About/> } />
            <Route path="*" element={<NotFoundPage value='404 error' />} />
        </Routes>
    </div>
  )
}

export default App
