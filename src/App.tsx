import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from './app.module.scss'
import Home from './components/Home'
import About from './components/About'
import NotFoundPage from './components/NotFoundPage'
import Form from './components/Form';

function App() {
  return (
    <div className={styles.app}>
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='about' element={ <About/> } />
            <Route path='form' element={ <Form/> } />
            <Route path="*" element={<NotFoundPage value='404 error' />} />
        </Routes>
    </div>
  )
}

export default App
