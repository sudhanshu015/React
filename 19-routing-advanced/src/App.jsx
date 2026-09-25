import React from 'react'
import Navbar from './componants/Navbar'
import Footer from './componants/Footer'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kides from './pages/Kides'
import Courses from './pages/Courses'
import Coursesdaitail from './pages/Coursesdaitail'
import Navebar2 from './componants/Navebar2'
const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navebar2/>
     <Routes>
      
      
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/courses/:id' element={<Coursesdaitail/>}/>

      <Route path='/product' element={<Product/>}>
      <Route path='men' element={<Men/>}/>
  
      <Route path='women' element={<Women/>}/>
      <Route path='kides' element={<Kides/>}/>
      </Route>
      <Route path='*'element={<NotFound/>}/>
      
     
     </Routes>
      <Footer/>
    </div>
  )
}

export default App