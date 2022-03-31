import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Weather } from "../components/Weather/Weather"

export const Paths = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Weather/>} />
      </Routes>
    </BrowserRouter>
  )
}