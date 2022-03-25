import React, { useEffect, useState } from 'react'

export const LifeCicle = () => {
  const [example, setExample] = useState('')

  // useEffect(()=>{
  //   console.log('Se cargo el component');
  //   setTimeout(() => {
  //     setExample('cambio en el estado')
  //   }, 2000);
  // })

 useEffect(()=>{
   console.log('se cargo el componente');
   setTimeout(() => {
      setExample('cambio en el estado')
    }, 2000);
 }, [])

  console.log(example);
  return (
    <>
    <p>Ciclo de vida un componente</p>
       <p>{example}</p>
    </>
  )
}
