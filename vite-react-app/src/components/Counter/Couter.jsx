import React, { useState } from 'react'
import './Counter.scss'

export const Couter = ({number = 10}) => {
  // Loigca -> comportamiento del componente
  cosnt [contador, setContador] = useState(number)


  // JSX
  return (
   <section>
     <p>{contador}</p>
     <button onClick={() => modContador(contador + 1)} >+</button>
   </section>
  )
}


