// REGLAS DE REACT

//1. Por convecion, los nombres de Componentes empiezan con Mayusculas (esto incluye el nombre de)
//2. En react, siemre debo mandar a importar la dependencia de react

import React from 'react'
import './counter.scss';
export class Counter extends React.Component {
  //Inicializar valores
    constructor (props){
      console.log(props);
      // super ejecuta el constructor del padre, y lo necesito para poder manejar estados en react con Clases
        super();
    //el State se va a encargar de modificar el Dom por mi
    // React detecta cambios en el State y actualiza la UI
        this.state = {
          count: props.initCout
        }
    }
  // Todo component debe devolver una vista (hacer render)
  //  render() sirve para mostrar el JSX que lleva el component en la pantalla del navegador.
  //
    render() {
      return (
        <div className='counter-main'>
          <h5>{this.state.count}</h5>
          <div className="counter-buttons">
          <button
           onClick={()=>this.setState({count: this.state.count + 1})}
           >
            Agregar
          </button>
             <button
             onClick={()=>this.setState({count: this.state.count - 1})}
             >
              disminuir
            </button>

          </div>
        </div>
      )
    }
}

