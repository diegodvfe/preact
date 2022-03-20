import React from 'react'
import Home from './Home'
import Cousin from './Cousin'
import {Route, Routes} from "react-router-dom"

function Pages() {
  return (

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cousin/:type' element={<Cousin/>} />

      </Routes>

  )
}

export default Pages