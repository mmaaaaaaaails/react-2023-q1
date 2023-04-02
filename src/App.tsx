import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from './app.module.scss'
import Home from './components/home/Home'
import About from './components/about/About'
import NotFoundPage from './components/notFound/NotFoundPage'
import Form from './components/form/Form';

const App = () => {
  return (
    <div className={styles.app}>
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='about' element={ <About/> } />
            <Route path='form' element={ <Form/> } />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </div>
  )
}

export default App
