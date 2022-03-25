import { useContador } from "../../hooks/useContador"

import './counter.scss'

export const useContador= ({ numero = 0})=>{
  const {contador, sumar, restar} = useContador(numero)


  // JSX
  return (
   <section>
     <p>{contador}</p>
     <button onClick={() => modContador(contador + 1)} >+</button>
     <button onClick={() => modContador(contador - 1)} >-</button>

   </section>
  )
}

export default CouterOPs