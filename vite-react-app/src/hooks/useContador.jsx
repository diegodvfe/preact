import { useState } from "react"

export const useContador =(numero)=>{
  const [contador, setContador] = useState(numero);

  const sumar =()=> modContador(setContador +1)
  const restar =()=>modContador(setContador -1)

  return {contador, sumar, restar}

}